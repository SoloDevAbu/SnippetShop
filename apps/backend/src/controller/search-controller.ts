import { Request, Response } from 'express';
import db from '@repo/db/client'

export const searchSnippets = async (req: Request, res: Response) => {
    try {
        const { query } = req.query;

        if (typeof query !== 'string' || query.length < 3) {
            res.status(400).json({ message: 'Search query must be at least 3 characters long' });
            return
        }

        const snippets = await db.codeSnippet.findMany({
            where: {
                OR: [
                    { title: { contains: query, mode: 'insensitive' } },
                    { description: { contains: query, mode: 'insensitive' } },
                ]
            },
            select: {
                id: true,
                title: true,
                language: {
                    select: {
                        name: true,
                        extension: true
                    }
                }
            },
            take: 10
        });

        res.status(200).json({ snippets });
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};