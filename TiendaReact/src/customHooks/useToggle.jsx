import { useState } from "react";


export default function useToggle() {

    const [toggle, setToggle] = useState(false);

    function abrirMenu(){
        setToggle((prev) => !prev)
        console.log("hola");
        
    }
    return {toggle, abrirMenu}
}
