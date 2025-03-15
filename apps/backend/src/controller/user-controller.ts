import { Request, Response } from "express";
import db from "@repo/db/client"
export const getUserSnippets = async (req: Request, res: Response) => {
    const userId = req.user?.userId;

    try {
        const snippets = await db.user.findUnique({
            where: {
                id: userId,
            },
            select: {
                purchases: {
                    select: {
                        code_snippet: {
                            select: {
                                title: true,
                                language: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })

        res.status(200).json({
            snippets
        })
    } catch (error) {
        
    }
}