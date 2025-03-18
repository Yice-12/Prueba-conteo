import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
  const { data } = await axios.get("http://localhost:5001/api/product/");
  return data;
});
