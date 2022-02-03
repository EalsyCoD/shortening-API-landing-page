import { useState } from 'react'

import { useSelector } from 'react-redux'
import { selectLinks } from '../../store/slice/linkSlice'


import { Section,Container, Wrapper, Span } from './styles'

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
                        
                        </Wrapper>
                ))}
            </Container>
        </Section>
    )
}


export { Shortens }