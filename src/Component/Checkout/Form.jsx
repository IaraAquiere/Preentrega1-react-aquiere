

const Form = ({datosForm, guardarDatosImput, enviarOrden}) => {
  return (
    <div>
      <h2>Complete este formulario para continuar con la compra</h2>
        <form className="formulario" onSubmit={enviarOrden}>
            <label htmlFor="nombre">Nombbre</label>
            <input type="text" id='nombre' name='nombre' value={datosForm.nombre} onChange={guardarDatosImput} />

            <label htmlFor="telefono">Telefono</label>
            <input type="text" id='telefono' name='telefono' value={datosForm.telefono} onChange={guardarDatosImput} />

            <label htmlFor="email">Email</label>
            <input type="text" id='email' name='email' value={datosForm.email} onChange={guardarDatosImput} />

            <button tipe="submit">Enviar orden</button>
        </form>
    </div>
  )
}

export default Form
