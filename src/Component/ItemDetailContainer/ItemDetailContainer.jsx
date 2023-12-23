import { useState, useEffect } from "react"
import AgarrarProductos from "../Utilidades/Data"
import ItemDetail from "../ItemDetail/ItemDetail"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    
    useEffect(() => {

        AgarrarProductos
      .then((respuesta) => {
        const encontrarProducto = respuesta.find ((product) => product.id === "ajacs4926")
        setProducto = encontrarProducto
      })
      .catch((error) => {
        console.log(error);
      })
      
      }, [])
    return (
        <div>
        <ItemDetail producto={producto}/>
        </div>
  )
}

export default ItemDetailContainer