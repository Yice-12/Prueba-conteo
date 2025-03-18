"use client";

import "./productCard.scss";
import Image from "next/image";
import trash from "../../assets/icons/trash.png";
import { useDispatch } from "react-redux";
import { deleteProductById } from "@/slices/actions/deleteProductById";

const NAME_SPACE = "product-card";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${NAME_SPACE}`}>
      <div className={`${NAME_SPACE}__content`}>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>
          <strong>Cantidad:</strong> {product.quantity}
        </p>
        <p>
          <strong>Código:</strong> {product.code}
        </p>
        <Image
          src={trash}
          width={24}
          height={24}
          alt="Eliminar"
          className={`${NAME_SPACE}__image`}
          onClick={() => dispatch(deleteProductById(product._id))}
        />
      </div>
    </div>
  );
};
