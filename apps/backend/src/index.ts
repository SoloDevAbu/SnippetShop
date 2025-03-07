import express from "express";
import cors from "cors";
import db from "@repo/db/client"

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post("/api/v1/submitSnippet", async (req, res) => {
    const {metadata, tags} = req.body;
    console.log(metadata, tags)

    try {
        const existingSnippet = await db.codeSnippet.findFirst({
            where: {
                title: metadata.title
            }
        });

        if(existingSnippet) {
            res.json({
                message: "Snippet Already Exist"
            })
            return;
        }

        const snippet = await db.codeSnippet.create({
            data: {
                title: metadata.title,
                description: metadata.description,
                test_cases: metadata.testCases ? {
                    create: metadata.testCases.map((tc: {
                        input: string; expected: string
                    }) => ({
                        input: tc.input,
                        expected_output: tc.expected
                    }))
                }: undefined,
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

        res.json(snippet);
    } catch (error) {
        console.error('Error creating snippet:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(PORT, () => {
    console.log("server running on 5000")
})