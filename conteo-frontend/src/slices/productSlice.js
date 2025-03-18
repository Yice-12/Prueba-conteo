import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./actions/getProducts";
import { deleteProductById } from "./actions/deleteProductById";
import { createProduct } from "./actions/createProduct";
import { toast } from "react-toastify";

const initialState = {
  products: [],
  loadingProducts: false,
  loadingDeleted: false,
  loadingCreateProduct: false,
};

export const productSlice = createSlice({
  name: "productSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getProducts.pending, (state) => {
        state.loadingProducts = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loadingProducts = false;
        state.products = action.payload;
      })
      .addCase(deleteProductById.pending, (state) => {
        state.loadingDeleted = true;
      })
      .addCase(deleteProductById.fulfilled, (state, action) => {
        state.loadingDeleted = false;
        const newProducts = state.products.filter(
          (product) => product._id !== action.payload._id
        );
        state.products = newProducts;
        toast.success("¡Producto del menú eliminado con éxito!");
      })
      .addCase(createProduct.pending, (state) => {
        state.loadingCreateProduct = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loadingCreateProduct = false;
        state.products.push(action.payload);
        toast.success("¡Producto del menú creado con éxito!");
      });
  },
});
