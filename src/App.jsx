import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Component/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom"

function App() {
  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/categoria/:categoria" element={<ItemListContainer />}/>
      <Route path="/detalle/:id" element={<ItemDetailContainer/>}/>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App
