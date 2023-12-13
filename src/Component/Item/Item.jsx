
const Item = ({producto}) => {
  return (
        <div className="item">
            <img className="image" src={producto.imagen} alt={producto.nombre}/>
            <h5>{producto.nombre} </h5>
            <p>{producto.precio}</p>
        </div>  
  );
};

export default Item