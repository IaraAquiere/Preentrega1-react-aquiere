import React, { useState } from 'react';
import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className='item-cunt'>
            <div className='controles'>
                <button onClick={restar}>-</button>
                <div>{contador}</div>
                <button onClick={sumar}>+</button>
            </div>
            <button className='terminar-boton' onClick={() => agregarAlCarrito(contador)} >
                Agregar al Carrito
            </button>
        </div>
    );
};

export default ItemCount;