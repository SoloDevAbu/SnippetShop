import express from 'express';
import cors from "cors";
import db from "@repo/db/client"

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.post('api/submitSnippet', async (req, res) => {
    const {metadata} = req.body;

    try {
        
    } catch (error) {
        
    }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
