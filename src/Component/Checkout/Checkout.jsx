import React, { useContext, useState } from "react";
import Form from "./Form";
import { CartContext } from "../../Context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import db from "../../db/db";
import Swal from 'sweetalert2'

import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    emailRepetido: "",
  });
  

  const [idOrden, setIdOrden] = useState(null);
  const { carrito, totalPrecio, borrarCarrito } = useContext(CartContext);
  
  const mostrarAlerta = () =>{
    Swal.fire({
      title: 'Los emails no coinciden',
      text: 'compruebelo nuevamente',
      icon: 'error',
      confirmButtonText: 'Continuar'
    });
  };

  const guardarDatosImput = (event) => {
    setDatosForm({ ...datosForm, [event.target.name]: event.target.value });
  };

  const enviarOrden = (event) => {
    event.preventDefault();
    if (datosForm.email === datosForm.emailRepetido) {
      const orden = {
        comprador: { ...datosForm },
        productos: [...carrito],
        fecha: new Date(),
        total: totalPrecio(),
      };
      subirOrden(orden);
    } else {
      mostrarAlerta();
    }
  };
  

  const subirOrden = (orden) => {
    const ordenesRef = collection(db, "ordenes");
    addDoc(ordenesRef, orden).then((respuesta) => {
      setIdOrden(respuesta.id);
      borrarCarrito();
    });
  };
  return (
    <div>
      {idOrden ? (
        <div className="aviso-orden">
          <h2>Orden Generada correctamente:</h2>
          <p>Nro de orden {idOrden}</p>
        </div>
      ) : (
        <Form
          datosForm={datosForm}
          guardarDatosImput={guardarDatosImput}
          enviarOrden={enviarOrden}
        />
      )}
    </div>
  );
};

export default Checkout;
