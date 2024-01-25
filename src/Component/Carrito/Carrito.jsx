import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./Carrito.css"


const Carrito = () => {
  const { carrito, borrarCarrito, borrarProducto, totalPrecio } = useContext(CartContext)

  if (carrito.length === 0) {
    return(
      <div className="cartel-carrito">
        <h2>El carrito esta vacio</h2>
        <h5>Una vez que añadas algo a tu carrito, aparecerá acá. ¿Listo para empezar?</h5>
        <Link className="boton" to="/">
          Empezar!
        </Link>
      </div>
    )
    
  }
  return (
    <div className="carrito">
      <h1>Carrito</h1>
      <ul className="lista">
      {
        carrito.map((producto) => (
          <li className="producto" key={producto.id}>
            <img className="imagen" src={producto.imagen} alt={producto.nombre} />
            <p className="titulo-carrito-nombre">{producto.nombre}</p>
            <p className="titulo-carrito">Cantidad: {producto.cantidad}</p>
            <p className="titulo-carrito">${producto.precio}</p>
            <button className="borrar-producto" onClick={ () => borrarProducto(producto.id) }>Eliminar producto</button>
          </li>
        ))
      }
      </ul>
      <div className="carrito-p2">
      <h3>Total a pagar: ${totalPrecio()}</h3>
      <button className="borrar-carrito"  onClick={borrarCarrito} >Vaciar Carrito</button>
      <Link  to="/checkout">
      <button className="continuar-compra" >continuar con mi compra</button>
      </Link>
      </div>
    </div>
  )
}
export default Carrito