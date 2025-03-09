import { useContext } from "react";
import { ProductosContexto } from "../contextos/productosContexto";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { anadir } from "../features/carritoSlice";

export const DetalleProducto = () => {

  const {productos} = useContext(ProductosContexto);
  const {id} = useParams();
  const dispatch = useDispatch();
  const producto = productos.find((producto)=>parseInt(producto.id) === parseInt(id))

  console.log(producto);
  
  
  return (
    <>
    <div className="tarjeta-producto">
                <img src={producto.imagen} alt={producto.nombre} />
                <p>{producto.precio}</p>
                <p>{producto.nombre}</p>
                <p>{producto.descripcion}</p>
                <p>{producto.caracteristicas.join(", ")}</p>
                <button onClick={()=>dispatch(anadir({nombre: producto.nombre, id:producto.id, cantidad: 1}))}>Añadir</button>
                <Link to="/"><button>Volver</button></Link>
            </div>
    </>
  )
}
