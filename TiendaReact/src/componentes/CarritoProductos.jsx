import { eliminar, aumentar } from "../features/carritoSlice"
import { useSelector, useDispatch } from "react-redux"

export const CarritoProductos = () => {
    const carrito = useSelector((state)=>state.carrito);
  return (
    <>
    <div>
        <h2>Mi carrito</h2>
        {/* <p>{cantidad de artículos}</p> */}
        {/* <p>Total</p> */}
      </div>
      <div>
        <ul>
          {carrito.map((producto)=>
          (<li>{producto.nombre}
          <p>{producto.cantidad}</p>
          <button>+</button>
          <button>-</button></li>))}
        </ul>
      </div>
    </>
  )
}
