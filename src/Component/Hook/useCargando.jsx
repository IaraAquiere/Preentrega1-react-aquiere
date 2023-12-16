import { useState } from "react"
import MoonLoader from "react-spinners/MoonLoader";

const useCargando = ()=>{
    const[cargando, setCargando]= useState(true)

    const mostrarCargando = () => setCargando (true)

    const ocultarCargando = () => setCargando (false)

    const pantallaDeCarga = <MoonLoader color="#ff0000" cssOverride={{}} loading size={70} speedMultiplier={1} />

    return {cargando, mostrarCargando, ocultarCargando, pantallaDeCarga}
} 

export default useCargando