import express, { Router } from "express";
import { editSnippet, getAllSnippets, getSnippet, newSnippet, snippetStatus, totalSnippetCount } from "../../controller/developer-controller";
import { AuthMiddleware } from "../../middleware/authMiddleware";
const router: Router = express.Router();

router.post("/submitSnippet",AuthMiddleware, newSnippet);
router.get("/all-snippets",AuthMiddleware, getAllSnippets);
router.get("/snippet/:snippetId",AuthMiddleware, getSnippet);
router.post("/update/:snippetId",AuthMiddleware, editSnippet);
router.get("/snippetCount", AuthMiddleware, totalSnippetCount);
router.get("/snippet-status", AuthMiddleware, snippetStatus);

export default router;