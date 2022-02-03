import styled from 'styled-components'


export const Button = styled.button`
&{
    position: relative;
    dispay:block;
    background-color: white;
    height: 45px;
    width: 120px;
    margin-left: 830px;
    border-radius: 20px;
    border: none;
    color: white;
    font-weight: 700;
    
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.topButton};
    }
    &:hover{
        opacity: 0.8
        
    }
`
export const Wrapper = styled.button`
height: 200px;
width: 200px;
`

export const Span = styled.button`
position: relative;
`
export const Container  = styled.button`
height: 200px;
`

export const Section  = styled.button`
position: relative;
padding: 3rem 0 0;
`

