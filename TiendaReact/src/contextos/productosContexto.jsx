import { createContext, useState, useEffect } from "react";
import getAllProducts from "../services/productosTienda";
export const ProductosContexto = createContext();

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setProductos(getAllProducts());
    setTimeout(() => {
      setIsLoading(false);
    }, 900);
    console.log(productos);
  }, []);

  console.log(productos);

  return (
    <ProductosContexto.Provider value={{ productos, isLoading }}>
      {children}
    </ProductosContexto.Provider>
  );
};
