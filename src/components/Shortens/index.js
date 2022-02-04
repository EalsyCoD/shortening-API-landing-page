import React from 'react'
import { useSelector } from 'react-redux'
import { selectLinks } from '../../store/slice/linkSlice'


import { Section,Container, Wrapper, Span, Button } from './styles'

const Shortens = () => {
    const links = useSelector(selectLinks)

    if (!links?.lenght) return null


    return (
        <Section>
            <Container>
                {links.map(item =>(
                    <Wrapper
                    key={item.code}

                    >
                        <Span>{item.original_link}</Span>
                        <Span>{item.full_shorrt_link2}</Span>
                        <Button variant="square">Copy</Button>
                        </Wrapper>
                        
                ))}
            </Container>
        </Section>
    )
}


export default Shortens