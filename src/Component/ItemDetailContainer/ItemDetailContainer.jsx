import { useState } from "react"
import "./ItemDetailContainer.css"
import useCargando from "../Hook/useCargando"
import AgarrarProductos from "../Utilidades/Data"


const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState([])
    const {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga} = useCargando()
    
    useEffect(() => {
        mostrarCargando();
    
        AgarrarProductos
      .then((respuesta) => {
        setDetalle(respuesta); 
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
        <ItemDetail detalle={detalle}/>
        </div>
        )}
        </>
  )
}

export default ItemDetailContainer