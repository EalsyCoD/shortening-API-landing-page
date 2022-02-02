import React from 'react'




import { Container, Wrapper, Title, Label, Button, Img } from './styles'



const Main = () => {
    return(
        <Container>
            <Wrapper>
                <Title>More than just shorter links</Title>
                <Label>Build your brands recognition and get detailed insights on how
                    your links are performing. </Label>
                <Button type='submit'>Get Started</Button>
                <Img src={'images/illustration-working.svg'} alt="icon" ></Img>
            </Wrapper>
        </Container>
    )
}



export default Main