import { Router } from "express";
import developerRoute from "./developer/route"
import categoryRoute from "./category/category-route"

const router = Router();

router.use("/developer", developerRoute);
router.use("/category", categoryRoute);

export default router;