const Form = ({ datosForm, guardarDatosImput, enviarOrden }) => {
  return (
    <div className="formulario-1">
      <h2>Complete este formulario para continuar con la compra:</h2>
      <form className="formulario" onSubmit={enviarOrden}>
        <label htmlFor="nombre">Nombre</label>
        <input
          className="text-formulario"
          type="text"
          id="nombre"
          name="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosImput}
          required
        />

        <label htmlFor="telefono">Telefono</label>
        <input
          className="text-formulario"
          type="text"
          id="telefono"
          name="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosImput}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          className="text-formulario"
          type="email"
          id="email"
          name="email"
          value={datosForm.email}
          onChange={guardarDatosImput}
          required
        />
        <label htmlFor="emailRepetido">Repetir Email</label>
        <input
          className="text-formulario"
          type="email"
          id="emailRepetido"
          name="emailRepetido"
          value={datosForm.emailRepetido}
          onChange={guardarDatosImput}
          required
        />

        <button className="text-formulario" tipe="submit">
          Enviar orden
        </button>
      </form>
    </div>
  );
};

export default Form;
