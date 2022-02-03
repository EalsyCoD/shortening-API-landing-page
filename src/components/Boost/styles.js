import styled from 'styled-components'



export const Container = styled.header`
max-width: 2100px;

`
export const Wrapper = styled.div`
padding-top: 3px;
height: 250px;
margin-top: -25px;

`
export const Title = styled.h1`
position: relative;
padding-top: 40px;
display: flex;
top: -250px;
margin-left: 700px;
color: white;

`
export const Button = styled.button`
&{
    position: relative;
    
    background-color: white;
    height: 40px;
    width: 150px;
    top: -250px;
    margin-left: 820px;
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
position: relative;
background-color: white;
background-color: ${(props) => props.theme.colors.secondary};
width: 2000px;
height: 250px;
top: 0px;
right: 20px;

`