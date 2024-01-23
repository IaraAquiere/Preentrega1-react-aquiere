import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

const CartWidget = () => {
  const {carrito, totalCantidad} = useContext(CartContext)
  return (
   
    <Link to="/carrito">
        <FaCartShopping color="white" size={35} />
      {
        carrito.length !== 0 && <p>{totalCantidad()}</p>
      }
    </Link>
   
  );
};

export default CartWidget;