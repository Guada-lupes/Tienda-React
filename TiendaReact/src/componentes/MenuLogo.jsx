
import "../styles/menu-logo.css"

export const MenuLogo = ({abrirMenu}) => {

  return (
    <div className="menu-logo-container">
      <svg onClick={() => abrirMenu()} xmlns="http://www.w3.org/2000/svg" width="50px" height="auto" fill="#A0706D" className="menu-logo-img" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
    </div>
  )
}
