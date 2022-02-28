import styled from "styled-components"


export const Container = styled.header`
max-width: 1000px;
height: 300px;

`


export const Wrapper = styled.div`
display:block;
max-width: 1000px;


`

export const Title = styled.h1`
margin-top: 100px;
font-size:85px;
margin-left: 400px;
height: 50px
max-width: 800px;
@media(max-width: 425px){
margin-left: 0px;
margin-top: 500px;
font-size: 45px;
text-align: center
}

`

export const Label = styled.p`
margin-top: -50px;
margin-left: 400px;
max-width: 550px;
font-size: 24px;
color: ${(props) => props.theme.colors.text};
@media(max-width: 425px){
margin-left: 0px;
margin-top: -10px;
text-align: center
}
`


export const Button = styled.button`
&{
    dispay:block;
    background-color: white;
    height: 40px;
    margin-left: 400px;
    margin-top: 10px;
    width: 135px;
    margin-right: 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-weight: 800;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.topButton};
    }
    &:hover{
        opacity: 0.5
    }
   @media(max-width: 425px){
margin-left: 135px;
margin-top: 0px;

} 
`


export const Img = styled.img`
position: absolute;
top: 140px;
left:1070px;

@media(max-width: 425px){
left: 0px;
width: 410px;
height: 300px;
}
`

