import { Request, Response } from "express";
import db from "@repo/db/client"

export const newSnippet = async (req: Request, res: Response) => {
    const userId = req.user?.userId
    try {

        const { metadata, tags, languageId } = req.body;
        console.log(metadata, tags, languageId)

        if(!metadata || metadata.title) {
            return res.status(400).json({ error: "Invalid request data" });
        }
        const existingSnippet = await db.codeSnippet.findFirst({
            where: {
                title: metadata.title,
                developer_id: userId
            }
        });

        if (existingSnippet) {
            res.status(409).json({
                message: "Snippet Already Exist"
            })
            return;
        }

        const snippet = await db.codeSnippet.create({
            data: {
                title: metadata.title,
                description: metadata.description,
                language_id: languageId,
                developer_id: userId,
                test_cases: metadata.testCases ? {
                    create: metadata.testCases.map((tc: {
                        input: string; expected: string
                    }) => ({
                        input: tc.input,
                        expected_output: tc.expected
                    }))
                } : undefined,
            }
        })

        if (tags && tags.length > 0) {
            for (const tagName of tags) {
                let tag = await db.tag.findFirst({ where: { name: tagName } });

                if (!tag) {
                    tag = await db.tag.create({ data: { name: tagName } });
                }

                await db.codeSnippetTag.create({
                    data: {
                        code_snippet_id: snippet.id,
                        tag_id: tag.id
                    }
                });
            }
        }

        return res.json(snippet);
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