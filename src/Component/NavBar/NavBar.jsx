import CartWidget from "./CartWidget";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div id="navbar">
      <h1>Infinity</h1>
    <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Tops</a></li>
        <li><a href="#">Short/Polleras</a></li>
        <li><a href="#">Vestidos</a></li>
      <li><a href="#">Accesorios</a></li>
    </ul>
    <CartWidget />
    </div>
  )
}

export default NavBar;
