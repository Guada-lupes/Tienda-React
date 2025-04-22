import { Inicio } from "./src/pages/Inicio";
import { ProductosProvider } from "./src/contextos/productosContexto";
import { Routes, Route } from "react-router-dom";
import { Carrito } from "./src/pages/Carrito";
import { DetalleProducto } from "./src/componentes/DetalleProducto";
import { Header } from "./src/componentes/Header";
import { Footer } from "./src/componentes/Footer";
import "./App.css"

const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <>
      <ProductosProvider>
        <Routes>
        <Route path="/" element={<Layout><Inicio /></Layout>} />
    <Route path="/categoria/:categoria?" element={<Layout><Inicio /></Layout>} />
    <Route path="/producto/:id" element={<Layout><DetalleProducto /></Layout>} />
    <Route path="/carrito" element={<Layout><Carrito /></Layout>} />
        </Routes>
      </ProductosProvider>
    </>
  );
}

export default App;
