import { reducir, aumentar, eliminar } from "../features/carritoSlice"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import "../styles/carritoProductos.css"

export const CarritoProductos = () => {
    const carrito = useSelector((state)=>state.carrito);
    const dispatch = useDispatch();
  return (
    <>
    <section className="carrito-section">
    <div className="carrito-button-container">
        <Link to="/"><button className="carrito-inicio-button">Inicio</button></Link>
    </div>
      <div className="carrito-lista-container">
      <h2>Mi carrito</h2>
        {/* <p>{cantidad de artículos}</p> */}
        {/* <p>Total</p> */}
        <ul className="carrito-ul">
          {carrito.map((producto)=>
          (<li className="carrito-li">{producto.nombre}
          <p>{`Cantidad: ${producto.cantidad}`}</p>
          <div className="carrrito-buttom-cantidad">
          <button className="carrito-buttom" onClick={()=>dispatch(aumentar(producto.id))}>+</button>
          <button className="carrito-buttom" onClick={()=>dispatch(reducir(producto.id))}>-</button>
          <button className="carrito-buttom" onClick={()=>dispatch(eliminar(producto.id))}>x</button>
          </div>
          </li>))}
        </ul>
      </div>
    </section>
    
    </>
  )
}
