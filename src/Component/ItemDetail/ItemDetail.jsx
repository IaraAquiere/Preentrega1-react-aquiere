import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
import "./ItemDetail.css"
import Count from "../ItemCount/ItemCount"
import ItemCount from "../ItemCount/ItemCount"
const ItemDetail = ({producto}) => {
  const {aumentar, decrementar} = ItemCount()
  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
      <h5>{producto.nombre}</h5>
      <p>{producto.description}</p>
      <h2>$ {producto.precio}</h2>
      </div>
      <ItemCount />
    </div>
    
  )
}

export default ItemDetail


