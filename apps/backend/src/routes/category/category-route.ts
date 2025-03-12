import { Router } from "express";
import { getJsSnippets, getSnippet } from "../../controller/snippet-category";
const router = Router();

router.get("/:category", getJsSnippets);
router.get("/snippet/:snippetId", getSnippet)

export default router;