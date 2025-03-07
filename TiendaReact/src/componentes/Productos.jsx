import { useContext } from "react";
import { ProductosContexto } from "../contextos/productosContexto";

export const Productos = () => {

    const {productos} = useContext(ProductosContexto);


    return (
      <div>
          <div className="contenedor-productos">
          {
                  productos.map((producto)=> (<div className="tarjeta-producto"><li key={producto.id}>
                      <img src={producto.imagen} alt={producto.nombre}/>
                      <p>{producto.precio}</p>
                      <p>{producto.nombre}</p>
                      <button>Añadir</button>
                      </li></div>))
              }
          </div>
      </div>
    )
}
