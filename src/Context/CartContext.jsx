import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const añadirProducto = (producto) => {
    const condicion = estaEnELCarrito(producto.id);
    if (condicion) {
      const productosModificados = carrito.map((productoCarrito) => {
        if (productoCarrito.id === producto.id) {
          return {
            ...productoCarrito,
            cantidad: productoCarrito.cantidad + producto.cantidad,
          };
        } else {
          return productoCarrito;
        }
      });
      setCarrito(productosModificados);
    } else {
      setCarrito([...carrito, producto]);
    }
  };

  const estaEnELCarrito = (idProducto) => {
    const respuesta = carrito.some((producto) => producto.id === idProducto);
    return respuesta;
  };

  const totalPrecio = () => {
    return carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );
  };

  const totalCantidad = () => {
    return carrito.reduce((total, producto) => total + producto.cantidad, 0);
  };

  const borrarCarrito = () => {
    setCarrito([]);
  };

  const borrarProducto = (idProducto) => {
    const productosFiltrados = carrito.filter(
      (producto) => producto.id !== idProducto
    );
    setCarrito(productosFiltrados);
  };
  console.log(carrito);

  return (
    <CartContext.Provider
      value={{
        carrito,
        añadirProducto,
        totalCantidad,
        borrarCarrito,
        borrarProducto,
        totalPrecio,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
