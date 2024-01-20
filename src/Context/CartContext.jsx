import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider= ( {children} ) => {
    const [carrito, setCarrito] = useState()
    const texto = "hola mundo"
  return (
    <CartContext value={{carrito, texto}}>
        {children}
    </CartContext>
  )
}

export {CartProvider, CartContext}