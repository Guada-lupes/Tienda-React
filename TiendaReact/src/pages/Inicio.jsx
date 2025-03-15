import { Productos } from "../componentes/Productos";
import { NavegadorCategorias } from "../componentes/NavegadorCategorias";
import useToggle from "../customHooks/useToggle";
import { MenuLogo } from "../componentes/MenuLogo";
import { Volver } from "../componentes/Volver";
import { useParams } from "react-router-dom";


export const Inicio = () => {
  const { toggle, abrirMenu } = useToggle();
  const {categoria} = useParams();


  return (
    <>

      <MenuLogo abrirMenu={abrirMenu}/>
      {categoria && <Volver/>}
      {toggle && <NavegadorCategorias abrirMenu={abrirMenu}/>}
      <Productos />
    </>
  );
};
