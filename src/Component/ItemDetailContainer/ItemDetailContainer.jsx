import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../../db/db";

import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [productoExiste, setProductoExiste] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const productosReferencia = doc(db, "products", id);
    getDoc(productosReferencia)
      .then((respuesta) => {
        const productoDb = { id: respuesta.id, ...respuesta.data() };
        console.log(productoDb);
        if (!respuesta.exists()) {
          setProductoExiste(true);
        } else {
          setProducto(productoDb);
        }
        setProducto(productoDb);
        console.log(productoDb);
      })
      .catch((error) => {
        console.error("Error obteniendo documento:", error);
      });
  }, [id]);

  return (
    <div>
      {productoExiste ? (
        <div className="no-existe">
          <h2>Producto no existe</h2>
          <button className="boton">
            <Link to="/"> Volver al Inicio</Link>
          </button>
        </div>
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
