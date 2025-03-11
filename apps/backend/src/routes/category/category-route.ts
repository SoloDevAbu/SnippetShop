import { Router } from "express";
import { getJsSnippets } from "../../controller/snippet-category";
const router = Router();

router.get("/:category", getJsSnippets);

export default router;