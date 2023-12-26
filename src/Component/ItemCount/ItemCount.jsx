import "../Utilidades/Data"

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);

    const aumentar = () => {
      if (contador < stock) {
        setContador(contador + 1);
      }
    };
  
    const decrementar = () => {
      if (contador > 1) {
        setContador(contador - 1);
      }
    };

  return (
    <div className="count">
      <div className="suma-resta">
        <button onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button onClick={aumentar}>+</button>
      </div>
      <button className="carrito"> Agregar al carrito! </button>
    </div>
  )
}

export default ItemCount
