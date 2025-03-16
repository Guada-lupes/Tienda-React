import "../styles/spinner.css";

export default function Cargando() {
  {
    console.log("cargando");
  }
  return (
    <div className="spinnerContainer">
      <span class="loader">Cargando</span>
    </div>
  );
}
