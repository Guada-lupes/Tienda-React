import { reducir, aumentar, eliminar } from "../features/carritoSlice"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";

export const CarritoProductos = () => {
    const carrito = useSelector((state)=>state.carrito);
    const dispatch = useDispatch();
  return (
    <>
    <div>
        <Link to="/"><button>Inicio</button></Link>
        <h2>Mi carrito</h2>
        {/* <p>{cantidad de artículos}</p> */}
        {/* <p>Total</p> */}
      </div>
      <div>
        <ul>
          {carrito.map((producto)=>
          (<li>{producto.nombre}
          <button onClick={()=>dispatch(eliminar(producto.id))}>Eliminar</button>
          <p>{producto.cantidad}</p>
          <button onClick={()=>dispatch(aumentar(producto.id))}>+</button>
          <button onClick={()=>dispatch(reducir(producto.id))}>-</button></li>))}
        </ul>
      </div>
    </>
  )
}
