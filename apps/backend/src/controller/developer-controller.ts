import { Request, Response } from "express";
import db from "@repo/db/client"
import { getLanguageById} from "@repo/constants/languages"

export const newSnippet = async (req: Request, res: Response) => {
    const userId = req.user?.userId
    try {
        const { metadata, tags, languageId } = req.body;

        if (!metadata || !metadata.title || !languageId) {
            return res.status(400).json({ error: "Title and language are required" });
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
            return res.status(400).json({ error: "Invalid language selected" });
        }

        const existingSnippet = await db.codeSnippet.findFirst({
            where: {
                title: metadata.title,
                developer_id: userId
            }
        });

        if (existingSnippet) {
            return res.status(409).json({
                message: "Snippet Already Exists"
            });
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

        return res.status(201).json({
            success: true,
            snippet
        });
    } catch (error) {
        console.error('Error creating snippet:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getAllSnippets = async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    try {
        const snippets = await db.codeSnippet.findMany({
            where: {
                developer_id: userId
            }
        })

        if (!snippets) {
            res.status(404).json({
                message: "No snippets, Create Your First snippet"
            })
            return;
        }

        res.status(200).json({
            success: true,
            snippets
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }

}

export const getSnippet = async (req: Request, res: Response) => {
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
        return res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }
}

export const editSnippet = async (req: Request, res: Response) => {
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
        }

        const snippet = await db.codeSnippet.upsert({
            where: {
                id: snippetId
            },
            create: {
                title: metadata.title,
                description: metadata.description,
                language_id: languageId,
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
        return res.status(500).json({
            success: false,
            error: (error as Error).message
        })
    }
}

export const totalSnippetCount = async (req: Request, res: Response): Promise<any> => {
    const userId  = req.user?.userId
    try {
        const count = await db.codeSnippet.count({
            where: {
                developer_id: userId
            }
        });
        return res.json({ success: true, count });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: (error as Error).message
        });
    }
}