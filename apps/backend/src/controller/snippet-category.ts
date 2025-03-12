import { Request, Response } from "express";
import db from "@repo/db/client"

export const getJsSnippets = async (req: Request, res: Response): Promise<void> => {
    const { category } = req.params;

    try {
        const snippets = await db.codeSnippet.findMany({
            where: {
                language: {
                    extension: category
                }
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

        if(!snippets) {
            res.status(404).json({
                message: "No Snippet yet!"
            });

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
    const {snippetId} = req.params;

    try {
        const snippet = await db.codeSnippet.findFirst({
            where: {
                id: snippetId
            },
            select: {
                title: true,
                description: true,
                language: {
                    select: {
                        name: true,
                        judge0_id: true
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
                },
                developer: {
                    select: {
                        name: true,
                    }
                },
                test_cases: {
                    select: {
                        input: true,
                        expected_output: true,
                    }
                }
            }
        })

        if(!snippet) {
            res.status(404).json({
                success: false,
                message: "No Snippet Found"
            })
            return
        }

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