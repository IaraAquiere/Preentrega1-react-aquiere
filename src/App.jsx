import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';

function App() {
  

  return(
    <>
    <NavBar/>
    <ItemListContainer greeting= {"holaa, bienvenidos"}/>
    </>
  );
}

export default App
