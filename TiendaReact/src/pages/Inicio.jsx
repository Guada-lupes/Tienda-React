import { Productos } from "../componentes/Productos";
import { NavegadorCategorias } from "../componentes/NavegadorCategorias";
import useToggle from "../customHooks/useToggle";
import { MenuLogo } from "../componentes/MenuLogo";
import { Volver } from "../componentes/Volver";
import { useParams } from "react-router-dom";
import { ProductosContexto } from "../contextos/productosContexto";
import { useContext } from "react";
import Cargando from "../componentes/Spinner";

export const Inicio = () => {
  const { toggle, abrirMenu } = useToggle();
  const { categoria } = useParams();
  const { isLoading } = useContext(ProductosContexto);
  //const [isLoading, SetIsLoading] = useState(true)
  console.log(isLoading);
  if (isLoading) {
    return (
      <>
        <Cargando />;
      </>
    );
  } else {
    return (
      <>
        <MenuLogo abrirMenu={abrirMenu} />
        {categoria && <Volver />}

        {toggle && <NavegadorCategorias abrirMenu={abrirMenu} />}
        <Productos />
      </>
    );
  }
};
