import styled from 'styled-components'



export const Container = styled.header`
max-width: 2000px;
`
export const Wrapper = styled.div`

height: 250px;
margin-top: -25px;

`
export const Title = styled.h1`
position: relative;
padding-top: 40px;
display: flex;
margin-left: 700px;
color: white;

`
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

export const Frame = styled.img`
position: absolute;
background-color: white;
background-color: #00003E;
width: 1900px;
height: 250px;
top: 1655px;
right: 0px;
border-radius: 15px;
`