import { reducir, aumentar, eliminar } from "../features/carritoSlice"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom";
import "../styles/carritoProductos.css"

export const CarritoProductos = () => {
    const carrito = useSelector((state)=>state.carrito);
    const dispatch = useDispatch();

    const total = carrito.reduce((total, producto)=> total+ (producto.precio*producto.cantidad), 0)

  return (
    <>
    <section className="carrito-section">
    <div className="carrito-button-container">
        <Link to="/"><button className="carrito-inicio-button">Inicio</button></Link>
    </div>
      <div className="carrito-lista-container">
      <h2>Mi carrito</h2>
        <ul className="carrito-ul">
          {carrito.map((producto)=>
          (<li key={producto.id} className="carrito-li"><h3>{producto.nombre}</h3>
          <p>{`Cantidad: ${producto.cantidad}`}</p>
          <p>{`${producto.precio} €`}</p>
          <div className="carrrito-buttom-cantidad">
          <button className="carrito-buttom" onClick={()=>dispatch(aumentar(producto.id))}>+</button>
          <button className="carrito-buttom" onClick={()=>dispatch(reducir(producto.id))}>-</button>
          <button className="carrito-buttom" onClick={()=>dispatch(eliminar(producto.id))}>x</button>
          </div>
          </li>))}
        </ul>
      </div>
      {
        carrito.length ===0 ? (<p className="vacio">Vacio</p>) : (<div className="total-container">
          <h3>Total: </h3><h3>{total}€</h3>
        </div>)
      }
    </section>
    
    </>
  )
}
