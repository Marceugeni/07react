import React from "react";
import Linia from "./components/Linia"
import  frases from "./frases"
import Header from "./components/Header"
import styled from "styled-components"
import './index.css'
import Button from "./components/Button"
import Footer from "./components/Footer"

function App () {
  const liniesComponent = frases.map(frase => <Linia oneFrase={frase}/>)

  return (
    <Background>
      
      <Header />

      <Buttoni>
        <Button text="Prev"/>
        <Button text="Next"/>
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
