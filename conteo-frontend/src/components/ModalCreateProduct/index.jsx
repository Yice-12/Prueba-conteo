import { BottomSheet } from "../BottomSheet";
import "./modalCreateProduct.scss";
import { Button } from "../Button";
import { Input } from "../Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "@/slices/actions/createProduct";

const NAME_SPACE = "modal-create-product";
const INITIAL_PRODUCT = {
  name: "",
  description: "",
  quantity: null,
  code: null,
};

export const ModalCreateProduct = ({ openModal, closeModal }) => {
  const [product, setProduct] = useState(INITIAL_PRODUCT);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
    closeModal();
    setProduct(INITIAL_PRODUCT);
  };

  const handleChangeInputs = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  return (
    <BottomSheet
      openModal={openModal}
      title={"Crear Producto"}
      closeModal={closeModal}
    >
      <div className={`${NAME_SPACE}__content`}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholder={"Nombre del Producto"}
            id="name"
            name="name"
            onChange={handleChangeInputs}
          />
          <Input
            placeholder={"Descripción del Producto"}
            id="description"
            name="description"
            onChange={handleChangeInputs}
          />
          <div className={`${NAME_SPACE}__quantity`}>
            <Input
              placeholder={"Cantidad del Producto"}
              id="quantity"
              name="quantity"
              onChange={handleChangeInputs}
              type="number"
            />
            <Input
              placeholder={"Código del Producto"}
              id="code"
              name="code"
              onChange={handleChangeInputs}
              type="number"
            />
          </div>
          <Button
            text="Crear Producto"
            disabled={
              !product.name ||
              !product.description ||
              !product.code ||
              !product.quantity
            }
          />
        </form>
      </div>
    </BottomSheet>
  );
};
