import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import "./Carrito.css"


const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto } = useContext(CartContext)

  if (carrito.length === 0) {
    return(
      <div className="cartel-carrito">
        <div className="texto">
        <h2>El carrito esta vacioo</h2>
        <h5>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</h5>
        </div>
        <div className="boton">
        <Link to="/">Empezar!</Link>
        </div>
      </div>
    )
    
  }
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