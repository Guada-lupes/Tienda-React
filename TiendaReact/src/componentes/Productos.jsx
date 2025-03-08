import { useContext, useEffect } from "react";
import { ProductosContexto } from "../contextos/productosContexto";
import { NavegadorCategorias } from "./NavegadorCategorias";
import { useSelector, useDispatch } from "react-redux";
import { anadir } from "../features/carritoSlice";
import { Link, Outlet } from "react-router-dom";

export const Productos = () => {
  const { productos } = useContext(ProductosContexto);
  const dispatch= useDispatch();
  const carrito = useSelector((state)=>state.carrito)

  useEffect(()=>{
    console.log(carrito);
    
  }, [carrito])
  return (
    <>
      <NavegadorCategorias />
      <div>
        <div className="contenedor-productos">
          {productos.map((producto) => (
            <div className="tarjeta-producto">
              <li key={producto.id}>
                <img src={producto.imagen} alt={producto.nombre} />
                <p>{producto.precio}</p>
                <p>{producto.nombre}</p>
                <button onClick={()=>dispatch(anadir({nombre: producto.nombre, id:producto.id, cantidad: 1}))}>Añadir</button>
                <Link to={`/${producto.id}`}><button>Detalles</button></Link>
                <Outlet/>
              </li>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
