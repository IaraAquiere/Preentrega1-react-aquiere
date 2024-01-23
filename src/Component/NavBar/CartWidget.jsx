import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {carrito, totalCantidad} = useContext(CartContext)
  return (
    <div id="cartwidget">
      <Link to="/carrito">
        <FaCartShopping color="white" size={35} />
      </Link>
      <p>{totalCantidad()}</p>
    </div>
  );
};

export default CartWidget;