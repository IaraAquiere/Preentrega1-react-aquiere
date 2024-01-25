import React, { useContext, useState } from 'react'
import Form from './Form'
import { CartContext } from '../../Context/CartContext'
import "./Checkout.css"
import {addDoc, collection } from "firebase/firestore"
import db from "../../db/db"

const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })  

    const [idOrden, setIdOrden] = useState(null)
    const {carrito, totalPrecio, borrarCarrito} = useContext(CartContext)

    const guardarDatosImput = (event) =>{
        setDatosForm({...datosForm, [event.target.name]: event.target.value})

    }

    const enviarOrden = (event) =>{
        event.preventDefault();
       const orden = {
        comprador: {...datosForm},
        productos: [...carrito],
        total: totalPrecio()
       }
       subirOrden(orden)
    }
    
    const  subirOrden = (orden) => {
        const ordenesRef = collection(db, "ordenes")
        addDoc(ordenesRef, orden)
        .then((respuesta) => {
            setIdOrden(respuesta.id)
            borrarCarrito()
        });
    }
    return (
    <div>
        {
            idOrden ? (
                <div className='aviso-orden' >
                    <h2>Orden Generada correctamente:</h2>
                    <p>Nro de orden {idOrden}</p>
                </div>
            ): (
            <Form datosForm={datosForm} guardarDatosImput={guardarDatosImput} enviarOrden={enviarOrden}/>
            )
        }
    </div>
  )
}

export default Checkout