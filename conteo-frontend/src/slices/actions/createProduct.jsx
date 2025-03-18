import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createProduct = createAsyncThunk(
  "createProduct",
  async ({ name, description, quantity, code }) => {
    const { data } = await axios.post("http://localhost:5001/api/product/", {
      name,
      description,
      quantity,
      code,
    });
    return data;
  }
);
