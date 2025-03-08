import { createSlice } from "@reduxjs/toolkit";

const carritoSlice = createSlice({
    name: "carrito",
    initialState: [],
    reducers: {
        anadir: (state, action)=>{
            if(!state.some((objeto=> objeto.id ===action.payload.id)))
            {state.push(action.payload)}},
        eliminar: (state)=>{},
        aumentar: (state)=>{},
    }
})

export const {anadir, eliminar, aumentar} =carritoSlice.actions;
export default carritoSlice.reducer;