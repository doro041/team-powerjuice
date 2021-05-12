import React from 'react'
import styled from 'styled-components'
import logo from '../logo.png'

const Container = styled.div`
display: flex;
align-items:center;
flex-direction: column;
justify-content: space-around;
height: 100vh;
`

const Logo = styled.div`
width: 300px;
height: 300px;
border-radius: 50%;
background-image: url(${logo});
background-size: cover;
`

export default function Main() {
    return (
        <Container>
            <h1>Power Juice</h1>
            <p>eco game</p>
            <Logo></Logo>
            <p>Fighting pollution one phone at a time!</p>
            
        </Container>
    )
}
