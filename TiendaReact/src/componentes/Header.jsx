import { Link } from "react-router-dom";
import "../styles/header.css"
export const Header = () => {
  return (
    <>
      <section className="header">
        <div className="header-img-container">
        <img className="header-logo" src="../../Lupas.png" />
        </div>
      <div className="header-carrito-container">
      <Link to="/carrito"><img className="header-carrito" src="../../public/cart-fill.svg"/></Link>
      </div>
        </section>
      
      {/* <div>
    <img
    {carrito ? src="../../public/cart-fill.svg" : src="../../public/cart.svg"}/>
    </div> */}
    </>
  );
};
