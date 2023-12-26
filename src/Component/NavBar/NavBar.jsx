import CartWidget from "./CartWidget";
import "./NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div id="navbar">
      <h1>Infinity</h1>
    <ul>
        <li>
        <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categoria/tops">Tops</Link>
        </li>
        <li>
          <Link to="/categoria/shorts">Short</Link>
        </li>
        <li>
          <Link to="/categoria/vestidos">Vestidos</Link>
          </li>
      <li>
        <Link to="/categoria/accesorios">Accesorios</Link>
      </li>
    </ul>
      <CartWidget />
    </div>
  )
}

export default NavBar;
