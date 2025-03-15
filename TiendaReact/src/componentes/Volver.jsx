import { Link } from "react-router-dom";
import "../styles/volver.css";

export const Volver = () => {
  return (
    <div className="volver-container">
    <Link to="/categoria">
      <p>Volver</p>  
    </Link>
    </div>


  )
}
