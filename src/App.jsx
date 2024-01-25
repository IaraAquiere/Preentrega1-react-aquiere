import { useState, useContext } from "react";

import NavBar from "./Component/NavBar/NavBar";
import ItemListContainer from "./Component/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Component/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import Error from "./Component/Error/Error";
import Carrito from "./Component/Carrito/Carrito";
import Checkout from "./Component/Checkout/Checkout";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
