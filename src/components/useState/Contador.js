import { useState } from "react";
function App (){
const [contador, setContador]=useState(0)
return (
    <div>
        <p> O contador esta em : {contador} </p>
        <button onClick={()=> setContador(contador+1)}>
         
         Incrementar

         </button>

    </div>
)
}

export default App;