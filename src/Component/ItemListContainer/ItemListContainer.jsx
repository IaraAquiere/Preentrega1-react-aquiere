import { useEffect, useState } from "react";

import AgarrarProductos from "../Utilidades/Data"
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  
  useEffect(() => {
    AgarrarProductos
  .then((respuesta) => {
    setProductos(respuesta); //Bobina jajajaja
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finalizo la promesa");
  });
  }, [])
  
  return (
    <div>
    <p>{greeting}</p>
    <ItemList productos={productos}/>
    </div>
  );
};

export default ItemListContainer