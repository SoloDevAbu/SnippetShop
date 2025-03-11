import { Router } from "express";
import { getJsSnippets } from "../../controller/snippet-category";
const router = Router();

router.get("/js", getJsSnippets);

export default router;