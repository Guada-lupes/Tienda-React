import { Inicio } from "./pages/Inicio";
import { ProductosProvider } from "./contextos/productosContexto";
import { Routes, Route } from "react-router-dom";
import { Carrito } from "./pages/Carrito";
import { DetalleProducto } from "./componentes/DetalleProducto";
import { Header } from "./componentes/Header";
import { Footer } from "./componentes/Footer";
import "./styles/App.css"

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
