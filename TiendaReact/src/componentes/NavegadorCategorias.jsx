import { Link } from "react-router-dom";
import { ProductosContexto } from "../contextos/productosContexto";
import { useContext } from "react";
import "../styles/navegadorCategorias.css"


export const NavegadorCategorias = ({abrirMenu}) => {
  const {productos}= useContext(ProductosContexto);
  const productosOrdenados = productos.map((producto) => producto.categoria).sort();

  console.log(productosOrdenados);
  
  return (
    <div className="nav-container">
    <nav >
          <Link to="/categoria" onClick={abrirMenu}>todo</Link>
          {productosOrdenados.map((producto)=>
          (<Link key={producto} to={`/categoria/${producto}`} onClick={abrirMenu}>
            <p>{producto}</p>
            </Link>))}
        </nav>
        </div>
//     <div className="nav-container">
// <nav >
//       <Link to="/categoria">todo</Link>
//       {productos.map((producto)=>
//       (<Link to={`/categoria/${producto.categoria}`}>
//         <p>{producto.categoria}</p>
//         </Link>))}
//     </nav>
//     </div>
    
  )
}
