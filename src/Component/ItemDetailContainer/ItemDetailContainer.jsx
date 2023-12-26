import { useState, useEffect } from "react"
import AgarrarProductos from "../Utilidades/Data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams()
    
    useEffect(() => {

        AgarrarProductos
      .then((respuesta) => {
        const encontrarProducto = respuesta.find ((product) => product.id === id)
        setProducto(encontrarProducto)
      })
      .catch ((err) => {
        console.log(err);
      })
      
      }, [])
    return (
        <div>
        <ItemDetail producto={producto}/>
        </div>
  )
}

export default ItemDetailContainer