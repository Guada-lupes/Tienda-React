import { Inicio } from "./pages/Inicio";
import { ProductosProvider } from "./contextos/productosContexto";
import { Routes, Route } from "react-router-dom";
import { Carrito } from "./pages/Carrito";
import { DetalleProducto } from "./componentes/DetalleProducto";

function App() {
  return (
    <>
      <ProductosProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/:id" element={<DetalleProducto/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
        </Routes>
      </ProductosProvider>
    </>
  );
}

export default App;
