import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import "./ItemDetail.css"
const ItemDetail = ({producto}) => {
  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
      <h5>{producto.nombre}</h5>
      <p>{producto.descripcion}</p>
      <p>$ {producto.precio}</p>
      </div>
    </div>
  )
}

export default ItemDetail


