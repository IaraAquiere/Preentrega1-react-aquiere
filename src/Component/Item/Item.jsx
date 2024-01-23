import { memo, useState } from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = memo(({ producto }) => {
  const [zoom, setZoom] = useState(false);

  const handleMouseOver = () => {
    setZoom(true);
  };

  const handleMouseLeave = () => {
    setZoom(false);
  };

  const carta = {
    transform: zoom ? 'scale(1.2)' : 'scale(1)',
    transition: 'transform 0.3s ease-in-out', // Corregido: 'transition' en lugar de 'transitiom'
  };

  return (
    <div className="item">
      <img
        style={carta}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        src={producto.imagen}
        alt={producto.nombre}
      />
      <p>{producto.nombre}</p>
      <button>
        <Link to={`/detalle/${producto.id}`}>ver detalle</Link>
      </button>
    </div>
  );
});

export default Item;
