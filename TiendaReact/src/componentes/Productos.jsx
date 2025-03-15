import { useContext } from "react";
import { ProductosContexto } from "../contextos/productosContexto";
import {useDispatch } from "react-redux";
import { anadir } from "../features/carritoSlice";
import { Link, Outlet, useParams } from "react-router-dom";
import "../styles/productos.css"

export const Productos = () => {
  const { productos } = useContext(ProductosContexto);
  const dispatch= useDispatch();
  const {categoria} = useParams();

const productosRenderizar = categoria ? productos.filter((producto)=>producto.categoria === categoria) : productos;

console.log(productosRenderizar);
console.log(productos);


  return (
    <>
      <section className="section-tienda">
        <div className="contenedor-productos">
          {productosRenderizar.map((producto) => (
            <div key={producto.id} className="tarjeta-producto">
              <div className="img-tarjeta-producto">
              <img src={producto.imagen} alt={producto.nombre} />
              </div>
                <div className="texto-container">
                <p>{`${producto.precio}€`}</p>
                <p>{producto.nombre}</p>
                </div>
            <div className="botones-contenedor-productos">
            <button onClick={()=>dispatch(anadir({nombre: producto.nombre, id:producto.id, cantidad: 1, precio: producto.precio}))}>Añadir</button>
            <Link to={`/producto/${producto.id}`}><button>Detalles</button></Link>
            </div>
                <Outlet/>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
