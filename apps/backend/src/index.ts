import express from "express";
import cors from "cors";
import db from "@repo/db/client"

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post("/api/v1/submitSnippet", async (req, res) => {
    const {metadata} = req.body;
    console.log(metadata)

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

                // code_snippet_tags: metadata.tags ? {
                //     create: metadata.tags
                // }: undefined
            }
        })

        res.json(snippet);
    } catch (error) {
        console.error('Error creating snippet:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(PORT, () => {
    console.log("server running on 5000")
})