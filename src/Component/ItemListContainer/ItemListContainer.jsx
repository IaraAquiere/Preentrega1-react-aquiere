import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import useCargando from "../Hook/useCargando"
import ItemList from "../ItemList/ItemList"
import AgarrarProductos from "../Utilidades/Data"


const ItemListContainer = ({greeting}) => {
const [productos, setProductos] = useState([])
const {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()

useEffect(() => {
  mostrarCargando();

  AgarrarProductos
  .then ((respuesta) => {
    if (categoria) {
      const productosFiltrados = respuesta. filter ((producto) => producto.categoria === categoria );
      setProductos(productosFiltrados);
    }else{
      setProductos(respuesta);
    }
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    ocultarCargando();
  })
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