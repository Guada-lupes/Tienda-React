import { createContext, useState, useEffect } from "react";
import getAllProducts from "../services/productosTienda";

export const ProductosContexto = createContext();

export const ProductosProvider = ({children}) => {
const [productos, setProductos] = useState([]);

  useEffect(()=>{
    setProductos(getAllProducts()); 
    console.log(productos);
    
}, [])

console.log(productos);


  return (
    <ProductosContexto.Provider value={{productos}}>
      {children}
    </ProductosContexto.Provider>
  )
}

