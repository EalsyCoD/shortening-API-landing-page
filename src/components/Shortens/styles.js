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
export const Wrapper = styled.div`
height: 200px;
width: 200px;
background-color: black;
`

export const Span = styled.button`
position: relative;
background-color: black;
`
export const Container  = styled.div`
height: 200px;
background-color: black;
`

export const Section  = styled.button`
position: relative;
background-color: black;

`