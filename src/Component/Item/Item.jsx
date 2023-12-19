import "./Item.css"
const Item = ({producto}) => {
  return (
    <div className="item">
      <img src={producto.imagen} alt={producto.nombre} />
      <p>{producto.nombre}</p>
      <button>Ver detalle</button>
    </div>
  );
};

export default Item