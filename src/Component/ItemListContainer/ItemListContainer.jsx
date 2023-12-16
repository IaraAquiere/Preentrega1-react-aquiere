import { useEffect, useState } from "react";
import "./ItemListContainer.css"
import AgarrarProductos from "../Utilidades/Data"
import ItemList from "../ItemList/ItemList"
import useCargando from "../Hook/useCargando";

const ItemListContainer = ({ greeting }) => {
  const [productos, setProductos] = useState([])
  const {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()
  
  useEffect(() => {
    mostrarCargando();

    AgarrarProductos
  .then((respuesta) => {
    setProductos(respuesta); 
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    ocultarCargando();
  });
  }, [])
  
 
  return (
    <>
    { cargando ? (
      <div className="algo">
        {pantallaDeCarga}
      </div>
    ) : (
    <div>
    <p>{greeting}</p>
    <ItemList productos={productos}/>
    </div>
    )}
    </>
  );
};

export default ItemListContainer