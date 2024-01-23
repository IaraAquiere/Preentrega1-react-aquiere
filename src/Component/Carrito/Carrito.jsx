import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto } = useContext(CartContext)

  return (
    <div>
      <ul style={{display: "flex"}}>
      {
        carrito.map((producto) => (
          <li key={producto.id} style={{ border: "1px solid black", listStyle: "none", margin: "0 20px" }}>
            <img src={producto.imagen} alt={producto.nombre} style={{width: "100px"}} />
            <p>{producto.nombre}</p>
            <p>cantidad {producto.cantidad}</p>
            <button onClick={ () => borrarProducto(producto.id) }>Eliminar producto</button>
          </li>
        ))
      }
      </ul>
      <button onClick={borrarCarrito} >Eliminar Carrito</button>
    </div>
  )
}
export default Carrito