import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../styles/header.css"

export const Header = () => {
  const carrito = useSelector((state)=>state.carrito)
  return (
    <>
      <section className="header">
        <div className="header-img-container">
        <img className="header-logo" src="../../Lupas.png" />
        </div>
      <div className="header-carrito-container">
      {
        carrito.length ===0 ? (      <Link to="/carrito"><img className="header-carrito" src="../../public/cart.svg"/></Link>) : (  <Link to="/carrito"><img className="header-carrito" src="../../public/cart-fill.svg"/></Link>)
      }
      </div>
        </section>
    </>
  );
};
