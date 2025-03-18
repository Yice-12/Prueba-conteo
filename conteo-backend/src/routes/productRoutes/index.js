import { Router } from "express";
import { createProduct } from "../../controllers/productController/createProduct.js";
import { getProducts } from "../../controllers/productController/getProducts.js";
import { deleteProduct } from "../../controllers/productController/deleteProduct.js";
export const productRoutes = Router();

productRoutes.route("/").post(createProduct).get(getProducts);

productRoutes.route("/:idProduct").delete(deleteProduct);
