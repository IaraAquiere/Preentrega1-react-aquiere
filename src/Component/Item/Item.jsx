import "./Item.css"
import { Link } from "react-router-dom";
const Item = ({producto}) => {
  return (
    <div className="item">
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <button>
      <Link to={`/detalle/${producto.id}`}>ver detalle</Link>
      </button>
    </div>
  );
};

export default Item