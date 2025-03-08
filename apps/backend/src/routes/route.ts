import { Router } from "express";
import developerRoute from "./developer/route"

const router = Router();

router.use("/developer", developerRoute);

export default router;