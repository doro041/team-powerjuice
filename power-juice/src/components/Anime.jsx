import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
align-items:center;
flex-direction: column;
justify-content: space-around;
height: 100vh;
`

const Circle = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
border: 1px solid #527cdf;
`

export default function Anime() {
    return (
        <Container>
            <span>Username:</span>
            <span>Choose anime</span>
            <Circle/>
            Boy
            <Circle/>
            Girl
            <Circle/>
            no-gender
        </Container>
    )
}
