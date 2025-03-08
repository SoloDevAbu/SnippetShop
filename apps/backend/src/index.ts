import express, { Application } from "express";
import cors from "cors";
import mainRoute from "./routes/route"

const app: Application = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use("api/v1", mainRoute);

app.listen(PORT, () => {
    console.log("server running on 5000")
})