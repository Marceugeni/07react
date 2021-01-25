import styled from "styled-components"

function Button (props) {
    return (
        <Buttion>{props.text}</Buttion>
    )
    
}

const Buttion = styled.button`
    
  border: none;
  outline: none;
  border-radius: 10px;
  background-color: #4c566a;
  color: whitesmoke;
  font-family: "Montserrat", sans-serif;
  padding: 15px;
  font-size: 1.5rem;
  max-width: 500px;


`

export default Button;