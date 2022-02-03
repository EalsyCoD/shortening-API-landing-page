import React from 'react'


import { Container, Wrapper, Title, Button, Frame } from './styles'



 const Boost = () => {
     return(
         <Container>
             <Wrapper>
             <Frame src={'images/bg-boost-desktop.svg'} alt="icon">
              </Frame>
                 <Title>Boost your links today</Title>
                     <Button type="submit">Get Started</Button>
             </Wrapper>
         </Container>
     )
 }


 export default Boost