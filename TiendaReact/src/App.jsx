import { Inicio } from "./pages/Inicio";
import { ProductosProvider } from "./contextos/productosContexto";
import { Routes, Route } from "react-router-dom";
import { Carrito } from "./pages/Carrito";
import { DetalleProducto } from "./componentes/DetalleProducto";
import "./styles/App.css";

function App() {
  return (
    <>
      <ProductosProvider>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/categoria/:categoria?" element={<Inicio />} />
          <Route path="/:id" element={<DetalleProducto/>}/>
          <Route/>

          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
      </ProductosProvider>
    </>
  );
}

export default App;
