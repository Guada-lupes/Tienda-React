import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
  name: "carrito",
  initialState: [],
  reducers: {
    anadir: (state, action) => {
      if (!state.some((objeto) => objeto.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    reducir: (state, action) => {
      const pElegido = state.find((producto) => producto.id === action.payload);
      if (pElegido.cantidad === 1){
        const respuesta = confirm("¿Está seguro de que desea eliminar el producto?")
        if(respuesta){
          return state.filter((producto) => producto.id !== action.payload);
        }
      }
      else{pElegido.cantidad -=1}
    },
    aumentar: (state, action) => {
        const pElegido = state.find((producto) => producto.id === action.payload);
        pElegido.cantidad +=1;
    },
    eliminar: (state, action)=>{
        return state.filter((producto) => producto.id !== action.payload);
    }
  },
});

export const { anadir, reducir, aumentar, eliminar } = carritoSlice.actions;
export default carritoSlice.reducer;
