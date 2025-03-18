import { Product } from "../../models/product.js";

export const createProduct = async (req, res) => {
  const { code, name, description, quantity, creation } = req.body;

  try {
    const product = await Product.create({
      code,
      name,
      description,
      quantity,
      creation,
    });
    res.status(200).json(product);
  } catch (error) {
    console.log(" No se pudo crear el producto");
  }
};
