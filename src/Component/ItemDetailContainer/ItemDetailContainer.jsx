import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"  
import db from "../../db/db"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const productosReferencia = doc(db, "products", id)  
    getDoc(productosReferencia)  
    .then((respuesta) => {
      const productoDb = {id: respuesta.id, ...respuesta.data() }
      setProducto(productoDb)
      console.log(productoDb);
    })
    .catch((error) => {
      console.error("Error obteniendo documento:", error);
    });
    
  }, [id]);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer
