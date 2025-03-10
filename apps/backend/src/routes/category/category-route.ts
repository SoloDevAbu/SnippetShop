import { Router } from "express";
import { getJsSnippets } from "../../controller/category";
const router = Router();

router.get("/js", getJsSnippets);

export default router;