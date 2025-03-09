import { Link } from "react-router-dom";
import { ProductosContexto } from "../contextos/productosContexto";
import { useContext } from "react";


export const NavegadorCategorias = () => {
  const {productos}= useContext(ProductosContexto);


  return (
    <nav>
      <Link to="/categoria">Todo</Link>
      {productos.map((producto)=>
      (<Link to={`/categoria/${producto.categoria}`}>
        <p>{producto.categoria}</p>
        </Link>))}
    </nav>

    // <nav>
    //     <Link to="/">Todo</Link>
    //     <Link to="/laptop"></Link> <a>Laptop</a>
    //     <Link to="/smartphones"></Link> <a>Smartphones</a>
    //     <Link to="/monitores"></Link><a>Monitores</a>
    //     <Link to="/teclado"></Link> <a>Monitor</a>
    //     <Link to="/ratones"></Link> <a>Teclado</a>
    //     <Link to="/tablets"></Link> <a>Ratones</a>
    //     <Link to="/auriculares"></Link><a>Tablet</a>
    //     <L<a>Auriculares</a>
    //     <a>Smartwatch</a>
    //     <a>Cargadores</a>
    //     <a>Disco ssd</a>
    //     <a>Camaras web</a>
    //     <a>Impresoras</a>
    //     <a>Altavoces</a>
    //     <a>Tarjetas gráfica</a>
    //     <a>Routers</a>
    //     <a>Sillas gamer</a>
    //     <a>Micrófonos</a>
    //     <a>Consolas</a>
    //     <a>Luces</a>
    // </nav>
  )
}
