import styled from 'styled-components'


export const Section = styled.section`
`
export const Container = styled.div`
`
export const Wrapper = styled.header`
`
export const WraperError = styled.header`
margin-top: 17px;
font-size: 14px;
color: var(--secondaryy);
`
export const Form = styled.form`
position: relative;
top: 85px;
right: -440px;
`
export const Input = styled.input`
&{
width: 800px;
height: 40px;
border-radius: 10px;

}

`
export const Button = styled.button`
&{
margin-left: 15px;
padding: 5px;
background-color: white;
height: 45px;
width: 110px;
border-radius: 10px;
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