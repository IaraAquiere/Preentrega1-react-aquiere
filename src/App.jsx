import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  

  return(
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={ <ItemListContainer greeting= {"holaa, bienvenidos"}/> } />
    </Routes>
    </BrowserRouter>
   
  
  );
}

export default App
