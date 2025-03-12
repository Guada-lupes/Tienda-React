
import "../styles/menu-logo.css"

export const MenuLogo = ({abrirMenu}) => {

  return (
    <div className="menu-logo-container">
    <img className="menu-logo-img" onClick={() => abrirMenu()} src="../public/list.svg" alt="Logo menu" />
    </div>
  )
}
