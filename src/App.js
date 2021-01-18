import React from "react";
import Linia from "./components/Linia"
import  frases from "./frases"

function App () {
  const liniaComponent = frases.map(frase => <Linia oneFrase={frase}/>)

  return (
    <div>
      {liniaComponent}
    </div>
  )
}




export default App;
