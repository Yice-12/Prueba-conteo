"use client";

import React from "react";
import { store } from "@/store/store";
import { Provider } from "react-redux";

export const ProductProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
