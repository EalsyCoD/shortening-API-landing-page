import styled from 'styled-components'


export const Frame = styled.img`
max-width: 1000px;
position: relative;
background-color: white;
background-color: ${(props) => props.theme.colors.secondary};
width: 1000px;
height: 120px;
top: 180px;
right: -400px;
border-radius: 15px;
@media(max-width: 425px){
max-width: 400px;
margin-left: -400px;
margin-top: -110px;
font-size: 45px;

}
`
export const Container = styled.header`
`
export const Wrapper = styled.div`
`
export const Button= styled.button`
`