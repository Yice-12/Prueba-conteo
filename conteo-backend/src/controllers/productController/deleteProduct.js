import { isValidObjectId } from "mongoose";
import { Product } from "../../models/product.js";

export const deleteProduct = async (req, res) => {
  const { idProduct } = req.params;

  try {
    if (!isValidObjectId(idProduct)) {
      throw {
        error: true,
        status: 400,
        message: "El ID del producto no es válido.",
      };
    }

    const product = await Product.findByIdAndDelete(idProduct);

    res.status(200).json(product);
  } catch (error) {
    console.log("No se pudo eliminar el producto");
  }
};
