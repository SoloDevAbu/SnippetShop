import { Router } from "express";
import developerRoute from "./developer/route"
import categoryRoute from "./category/category-route"
import searchRoute from './search/search-route'
const router = Router();

router.use("/developer", developerRoute);
router.use("/category", categoryRoute);
router.use('/search', searchRoute);

export default router;