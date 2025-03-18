"use client";

import { getProducts } from "@/slices/actions/getProducts";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../ProductCard";
import "./productList.scss";
import { ModalCreateProduct } from "../ModalCreateProduct";
import { Button } from "../Button";
import { Filters } from "../Filters";

const NAME_SPACE = "product-list";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [openModal, setOpenModal] = useState(false);
  const [filter, setFilter] = useState("");

  const closeModal = () => {
    setOpenModal(false);
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (filter === "code") return a.code - b.code;
    if (filter === "name") return a.name.localeCompare(b.name);
    if (filter === "quantity") return a.quantity - b.quantity;
    if (filter === "creation")
      return new Date(a.creation) - new Date(b.creation);
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={`${NAME_SPACE}`}>
      <h1>Productos</h1>
      <div className={`${NAME_SPACE}__button-create`}>
        <Button text="Crear Producto" onClick={() => setOpenModal(true)} />
        <Filters setFilter={setFilter} />
      </div>
      <div className={`${NAME_SPACE}__product-card`}>
        {sortedProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <ModalCreateProduct openModal={openModal} closeModal={closeModal} />
    </div>
  );
};
