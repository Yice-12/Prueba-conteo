import { Router } from "express";
import { productRoutes } from "./productRoutes/index.js";

export const router = Router();

router.use("/product", productRoutes);
