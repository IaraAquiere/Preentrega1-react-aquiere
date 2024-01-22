import { useState } from "react"


import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../Context/CartContext"

import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
  const [toggle, setToggle] = useState(false);
  const {añadirProducto} = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoNuevo = {...producto, cantidad: contador }
    añadirProducto(productoNuevo)
    setToggle(true);
  };

  console.log(carrito);
  return (
    <div className="item-detail">
      <img className="imagen" src={producto.imagen} alt={producto.nombre} />
      <div className="texto">
      <h5>{producto.nombre}</h5>
      <p>{producto.description}</p>
      <h2>$ {producto.precio}</h2>
      <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
      </div>
    </div>
    
  )
}

export default ItemDetail


