import { useEffect, useState } from "react"
import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"
import MoonLoader from "react-spinners/MoonLoader"
const ItemListContainer = () => {
const [productos, setProductos] = useState([])
const [cargando, setCargando] = useState(true)
const {categoria} = useParams()

useEffect(() => {
  setCargando(true)
  let consulta
 const productosReferencia = collection(db, "products")
 if (categoria) {
  consulta = query(productosReferencia, where("categoria", "==", categoria))
 }else{
  consulta = productosReferencia
 }

getDocs(consulta)
.then ((respuesta) => {
  let productosDb = respuesta.docs.map((product) =>{
    return {id: product.id, ...product.data() }
  });
  setProductos(productosDb)
})
.catch ((error) => console.log(error))
.finally (() => setCargando(false))

}, [categoria]);

  return (
  <>
  { cargando ? (
  <div className="algo">
    <MoonLoader color="#ff0000"/>
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