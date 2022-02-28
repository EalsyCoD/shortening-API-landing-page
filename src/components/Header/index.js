import React from 'react'

import { Container, Wrapper, Title, Label, LoginButton, SignButton } from './styles'



const Header = () => {


    return (
        <Container>
        <Wrapper>
                <Title>Shortly</Title>
                <Label>Features</Label>
                <Label>Pricing</Label>
                <Label>Resourses</Label>
                <LoginButton type="submit" >Login</LoginButton>
                <SignButton  type="submit" >Sign Up</SignButton>
            </Wrapper>
        </Container>
    )
}


export default Header