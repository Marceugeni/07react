import React from "react";
import Linia from "./components/Linia"
import  frases from "./frases"
import Header from "./components/Header"
import styled from "styled-components"
import './index.css'
import Fbutton from "./components/ButtonForward"
import Bbutton from "./components/ButtonBackwards"
import Footer from "./components/Footer"

function App () {
  const liniesComponent = frases.map(frase => <Linia oneFrase={frase}/>)

  return (
    <Background>
      
      <Header />

      <Buttoni>
        <Bbutton />
        <Fbutton />
      </Buttoni>

      {liniesComponent}

      <Footer />

    </Background>
  )
}

const Background = styled.div`
  background-color: #2E3440;
  color: #eceff4;


`

const Buttoni = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`


export default App;
