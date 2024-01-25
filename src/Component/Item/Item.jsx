import { memo, useState } from "react";
import { Link } from "react-router-dom";

import "./Item.css";

const Item = memo(({ producto }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const carta = {
    transform: zoom ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div
      className="item"
      style={carta}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img className="img-item" src={producto.imagen} alt={producto.nombre} />
      <p className="titulo-item">{producto.nombre}</p>
      <button className="boton-item">
        <Link to={`/detalle/${producto.id}`}>Ver Detalle</Link>
      </button>
    </div>
  );
});

export default Item;
