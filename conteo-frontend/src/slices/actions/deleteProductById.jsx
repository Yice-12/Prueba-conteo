import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteProductById = createAsyncThunk(
  "deleteProductById",
  async (idProduct) => {
    const { data } = await axios.delete(
      `http://localhost:5001/api/product/${idProduct}`
    );
    return data;
  }
);
