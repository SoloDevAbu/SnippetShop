import express, { Router } from "express";
import { editSnippet, getAllSnippets, getSnippet, newSnippet, totalSnippetCount } from "../../controller/developer-controller";
const router: Router = express.Router();

router.post("/submitSnippet", newSnippet);
router.get("/all-snippets", getAllSnippets);
router.get("/snippet/:snippetId", getSnippet);
router.post("/update/:snippetId", editSnippet);
router.get("/snippetCount", totalSnippetCount)

export default router;