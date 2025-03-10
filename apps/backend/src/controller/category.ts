import { Request, Response } from "express";
import db from "@repo/db/client"

export const getJsSnippets = async (req: Request, res: Response): Promise<void> => {
    const { category } = req.params;

    try {
        const snippets = await db.codeSnippet.findMany({
            where: {
                language: {
                    extension: "js"
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