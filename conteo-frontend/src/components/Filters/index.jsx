import React from "react";
import "./filters.scss";

const NAME_SPACE = "filters";

export const Filters = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={`${NAME_SPACE}`}>
      <select onChange={handleChange} defaultValue={""}>
        <option value="" disabled hidden>
          Selecciona un filtro
        </option>
        <option value={null}>Ninguno</option>
        <option value="name">Nombre</option>
        <option value="quantity">Cantidad</option>
        <option value="creation">Creación</option>
        <option value="code">Código</option>
      </select>
    </div>
  );
};
