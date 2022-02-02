import styled from 'styled-components'


export const Container = styled.header`
 background: white;
 max-width: 1700px;
 
`

export const Wrapper = styled.div`
display:flex;
justify-content: space-between;

`


export const Title  = styled.h1`
padding-left: 50px

`
export const Label = styled.p`
&{
padding-top: 18px;
color: ${(props) => props.theme.colors.text};
cursor: pointer;
}
&:hover{
    color: black;
}
`
export const LoginButton = styled.button`
&{
background-color: white;
border: none;
margin-top: 25px;
margin-left: 980px;
height: 36px;
font-weight: 800;
letter-spacing: 
cursor: pointer;
color: ${(props) => props.theme.colors.text};
}

`
export const SignButton = styled.button`
&{
dispay:block;
background-color: white;
height: 33px;
width: 90px;
margin-top: 25px;
margin-right: 20px;
border-radius: 15px;
border: none;
color: white;
font-weight: 700;
cursor: pointer;
background-color: ${(props) => props.theme.colors.topButton};
}
&:hover{
    opacity: 0.5
}
`

