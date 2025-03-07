import { Inicio } from './pages/Inicio';
import { ProductosProvider } from './contextos/productosContexto';

function App() {


  return (
    <>
    <ProductosProvider>
    <Inicio/>
    </ProductosProvider>

    </>
  )
}

export default App
