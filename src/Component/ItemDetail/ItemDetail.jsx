import ItemCount from "../ItemCount/ItemCount"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import "./ItemDetail.css"
const ItemDetail = ({producto}) => {
  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
      <h5>{producto.nombre}</h5>
      <p>{producto.description}</p>
      <h2>$ {producto.precio}</h2>
      <ItemCount/>
      </div>
    </div>
    
  )
}

export default ItemDetail


