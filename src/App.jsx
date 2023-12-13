import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Component/NavBar/NavBar';
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';

function App() {
  

  return(
    <div>
    <NavBar/>
    <ItemListContainer greeting= {"holaa, bienvenidos"}/>
    </div>
  );
}

export default App
