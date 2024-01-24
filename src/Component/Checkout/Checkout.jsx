import React, { useContext, useState } from 'react'
import Form from './Form'
import { CartContext } from '../../Context/CartContext'


const Checkout = () => {
    const [datosForm, setDatosForm] = useState({
        nombre: "",
        telefono: "",
        email: "",
    })  

    const {carrito, totalPrecio} = useContext(CartContext)

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
       console.log(orden);
    }
    
    return (
    <div>
        <Form datosForm={datosForm} guardarDatosImput={guardarDatosImput} enviarOrden={enviarOrden}/>
    </div>
  )
}

export default Checkout