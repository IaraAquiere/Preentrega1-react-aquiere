import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
const ItemDetail = ({producto}) => {
  return (
    <div>
      <img src={producto.imagen} alt={producto.nombre} />
      <h5>{producto.nombre}</h5>
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
    </div>
  )
}

export default ItemDetail


