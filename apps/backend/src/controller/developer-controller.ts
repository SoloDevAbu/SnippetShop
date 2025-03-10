import { Request, Response } from "express";
import db from "@repo/db/client"
import { getLanguageById} from "@repo/constants/languages"

export const newSnippet = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId
    if (!userId) {
        res.status(401).json({ error: "Unauthorized" });
        return
    }

    try {
        const { metadata, tags, languageId } = req.body;

        if (!metadata || !metadata.title || !languageId) {
            res.status(400).json({ error: "Title and language are required" });
            return
        }

        const languageInfo = getLanguageById(languageId);
        const language = await db.language.upsert({
            where: {
                judge0_id: languageId
            },
            update: {},
            create: {
                name: languageInfo.name,
                extension: languageInfo.extension,
                judge0_id: languageId
            }
        });

        if (!language) {
            res.status(400).json({ error: "Invalid language selected" });
            return
        }

        const existingSnippet = await db.codeSnippet.findFirst({
            where: {
                title: metadata.title,
                developer_id: userId
            }
        });

        if (existingSnippet) {
            res.status(409).json({
                message: "Snippet Already Exists"
            });
            return
        }

        const snippet = await db.codeSnippet.create({
            data: {
                title: metadata.title,
                description: metadata.description,
                language_id: language.id,
                developer_id: userId,
                test_cases: metadata.testCases ? {
                    create: metadata.testCases.map((tc: {
                        input: string; expected: string
                    }) => ({
                        input: tc.input,
                        expected_output: tc.expected
                    }))
                } : undefined,
            },
            include: {
                language: true,
                test_cases: true
            }
        });

        if (tags && tags.length > 0) {
            const tagPromises = tags.map(async (tagName: string) => {
                const tag = await db.tag.upsert({
                    where: { name: tagName },
                    update: {},
                    create: { name: tagName }
                });

                return db.codeSnippetTag.create({
                    data: {
                        code_snippet_id: snippet.id,
                        tag_id: tag.id
                    }
                });
            });

            await Promise.all(tagPromises);
        }

        res.status(201).json({
            success: true,
            snippet
        });
    } catch (error) {
        console.error('Error creating snippet:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getAllSnippets = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId;

    try {
        const snippets = await db.codeSnippet.findMany({
            where: {
                developer_id: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                language: {
                    select: {
                        name: true,
                        extension: true
                    }
                },
                tags: {
                    select: {
                        tag: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })

        if (!snippets) {
            res.status(404).json({
                message: "No snippets, Create Your First snippet"
            })
            return
        }

        res.status(200).json({
            success: true,
            snippets
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }

}

export const getSnippet = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId;
    const { snippetId } = req.params;

    try {
        const developer = await db.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!developer) {
            res.status(401).json({
                success: false,
                message: 'You are not Authorized'
            })
            return
        }

        const snippet = await db.codeSnippet.findFirst({
            where: {
                id: snippetId
            }
        })

        res.status(200).json({
            success: true,
            snippet
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }
}

export const editSnippet = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId;
    const { snippetId } = req.params;
    const { metadata, languageId } = req.body;

    try {
        const user = await db.user.findUnique({
            where: {
                id: userId
            }
        })

        if (!user) {
            res.status(401).json({
                success: false,
                message: "UnAuthorized"
            })
            return
        }

        const snippet = await db.codeSnippet.upsert({
            where: {
                id: snippetId
            },
            create: {
                title: metadata.title,
                description: metadata.description,
                language: {
                    connect: { id: languageId }
                },
                developer: {
                    connect: { id: userId }
                },
                test_cases: {
                    create: metadata.testCases.map((tc: {
                        input: string; expected: string
                    }) => ({
                        input: tc.input,
                        expected_output: tc.expected
                    }))
                }
            },
            update: {
                title: metadata.title,
                description: metadata.description,
                language_id: languageId,
                test_cases: metadata.testCases.map((tc: {
                    input: string, expected: string
                }) => ({
                    input: tc.input,
                    expected: tc.expected
                }))
            }
        })

        res.status(201).json({
            success: true,
            snippet
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }
}

export const totalSnippetCount = async (req: Request, res: Response): Promise<void>=> {
    const userId  = req.user?.userId
    try {
        const count = await db.codeSnippet.count({
            where: {
                developer_id: userId
            }
        });
        res.json({ success: true, count });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: (error as Error).message
        });
    }
}

export const snippetStatus = async (req: Request, res: Response): Promise<void> => {
    const userId = req.user?.userId;

    try {
        const allSnippets = await db.codeSnippet.count({
            where: {
                developer_id: userId
            }
        });

        const pendingSnippets = await db.codeSnippet.count({
            where: {
                developer_id: userId,
                status: "PENDING"
            }
        })

        const approvedSnippets = await db.codeSnippet.count({
            where: {
                developer_id: userId,
                status: "APPROVED"
            }
        })

        const snippets = await db.codeSnippet.findMany({
            where: {
                developer_id: userId
            },
            select: {
                id: true,
                title: true,
                description: true,
                language: {
                    select: {
                        name: true,
                        extension: true
                    }
                },
                tags: {
                    select: {
                        tag: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        })


        res.json({allSnippets, pendingSnippets, approvedSnippets, snippets})
    } catch (error) {
        res.status(500).json({
            success: false,
            error: (error as Error).message
        });
    }
}