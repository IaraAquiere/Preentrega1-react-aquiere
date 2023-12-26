import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import useCargando from "../Hook/useCargando"
import ItemList from "../ItemList/ItemList"
import AgarrarProductos from "../Utilidades/Data"
import { useParams } from "react-router-dom"


const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()
const {categoria} = useParams()

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
}, [categoria])

  return (
    <>
    { cargando ? (
    <div className="algo">
      {pantallaDeCarga}
    </div>
  ) : (
  <div>
    <h1>  </h1>
  <ItemList productos={productos}/>
  </div>
  )}
    </>
  );
};

export default ItemListContainer