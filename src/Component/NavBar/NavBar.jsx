import CartWidget from "./CartWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navbar">
        <h1>Tienda de carteras</h1>
        <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Quienes somos</a></li>
      </ul>
        <CartWidget/>
    </div>
  )
}

export default NavBar;
