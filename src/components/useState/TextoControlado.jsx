import { useState } from "react";

function TextoControlado(){
    const [text,setTexto] = useState("Texto Controlado"); 
    return(
        <div>
            <input onChange= { (event) => setTexto(event.target.value)}></input>        
            <p>{text}</p>
        </div>
    )
}
export default TextoControlado;