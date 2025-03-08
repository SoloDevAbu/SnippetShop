import express, { Router } from "express";
import { editSnippet, getAllSnippets, getSnippet, newSnippet, totalSnippetCount } from "../../controller/developer-controller";
import { AuthMiddleware } from "../../middleware/authMiddleware";
const router: Router = express.Router();

router.post("/submitSnippet", newSnippet);
router.get("/all-snippets", getAllSnippets);
router.get("/snippet/:snippetId", getSnippet);
router.post("/update/:snippetId", editSnippet);
router.get("/snippetCount", AuthMiddleware, totalSnippetCount);

export default router;