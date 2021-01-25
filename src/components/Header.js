import styled from "styled-components"


function Header () {
    return(
        <Headerr>Shakespeare Frases</Headerr>
    )
}

export default Header;

const Headerr = styled.h1`
     height: 100px;
    background-color: #3B4252;
    color: whitesmoke;
    margin-bottom: 15px;
    text-align: center;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
`