import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider= ( {children} ) => {
    const [carrito, setCarrito] = useState([])
    

    const añadirProducto = (producto) => {
      const condicion = estaEnELCarrito(producto.id)
      if (condicion) {
        
      }else{
        setCarrito([...producto, carrito])
      }


    }

    
    
  return (
    <CartContext value={{carrito}}>
        {children}
    </CartContext>
  )
}

export {CartContext, CartProvider}