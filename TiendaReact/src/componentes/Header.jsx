import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div>
        <img src="../../Lupas.png" />
      </div>
      <Link to="/carrito">Carrito</Link>
      {/* <div>
    <img
    {carrito ? src="../../public/cart-fill.svg" : src="../../public/cart.svg"}/>
    </div> */}
    </>
  );
};
