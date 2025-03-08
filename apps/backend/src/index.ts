import express, { Application } from "express";
import cors from "cors";
import mainRoute from "./routes/route"
import cookieParser from "cookie-parser";

const app: Application = express();

app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000", // Explicitly allow your frontend origin
    credentials: true,               // Allow credentials (cookies, authorization headers, etc.)
  }));
app.use(cookieParser())

const PORT = process.env.PORT || 5000;

app.use("/api/v1", mainRoute);

app.listen(PORT, () => {
    console.log("server running on 5000")
})