import { Link } from "react-router-dom";
import { ProductosContexto } from "../contextos/productosContexto";
import { useContext } from "react";
import "../styles/navegadorCategorias.css"

export const NavegadorCategorias = () => {
  const {productos}= useContext(ProductosContexto);


  return (
    <div className="nav-container">
<nav>
      <Link to="/categoria">todo</Link>
      {productos.map((producto)=>
      (<Link to={`/categoria/${producto.categoria}`}>
        <p>{producto.categoria}</p>
        </Link>))}
    </nav>
    </div>
    
  )
}
