import { useContext } from "react";
import { ProductosContexto } from "../contextos/productosContexto";
import { NavegadorCategorias } from "./NavegadorCategorias";
import {useDispatch } from "react-redux";
import { anadir } from "../features/carritoSlice";
import { Link, Outlet, useParams } from "react-router-dom";

export const Productos = () => {
  const { productos } = useContext(ProductosContexto);
  const dispatch= useDispatch();
  const {categoria} = useParams();

const productosRenderizar = categoria ? productos.filter((producto)=>producto.categoria === categoria) : productos;

console.log(productosRenderizar);
console.log(productos);


  return (
    <>
      <NavegadorCategorias />
      <div>
        <div className="contenedor-productos">
          {productosRenderizar.map((producto) => (
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
