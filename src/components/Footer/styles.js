import styled from 'styled-components'



export const Container = styled.header`
max-width: 2000px;
margin-left: -20px;
`
export const Wrapper = styled.div`
background-color: ${(props) => props.theme.colors.bgfooter};
height: 400px;
width: 2000px;

@media(max-width: 425px){
    width: 100%;
height: 100%;
}

`
export const Logo = styled.img`
margin-top: 80px;
margin-left: 400px;
@media(max-width: 425px){
margin-top: 30px;
margin-left: 165px;
}
`
export const Features = styled.header`
color: white;
margin-left: 730px;
margin-top: -30px;
font-size: 15px;
@media(max-width: 425px){
margin-top: 30px;
margin-left: 190px;
}
`
export const LinkShortening = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 730px;
margin-top: 15px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 170px;
}
`
export const BrandedLinks = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
font-size: 15px;
margin-left: 730px;;
margin-top: 10px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 175px;
}
`
export const Analytics = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 730px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 190px;
}
`
export const Resources = styled.header`
color: white;
margin-left: 920px;
margin-top: -109px;
font-size: 15px;
@media(max-width: 425px){
margin-top: 30px;
margin-left: 185px;
}
`
export const Blog = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 920px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 205px;
}
`
export const Developers = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 920px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 185px;
}
`
export const Support = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 920px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 195px;
}
`
export const Company = styled.header`
color: white;
margin-left: 1100px;
margin-top: -109px;
font-size: 15px;
@media(max-width: 425px){
margin-top: 30px;
margin-left: 190px;
}
`

export const About = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 1100px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 200px;
}
`
export const OurTeam = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 1100px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 190px;
}
`
export const Careers = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 1100px;
margin-top: 12px;
font-size: 15px;
}
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 195px;
}
`
export const Contact = styled.header`
&{
color: ${(props) => props.theme.colors.text};
cursor: pointer;
margin-left: 1100px;
margin-top: 12px;
font-size: 15px;
&:hover{
    color: ${(props) => props.theme.colors.topButton}
}
@media(max-width: 425px){
margin-top: 30px;
margin-left: 195px;
}
`
export const Facebook = styled.img`
&{
position: relative;;
top: -140px;
right: -1240px;
cursor: pointer;
}
&:hover{
    color:red
    
}
@media(max-width: 425px){
margin-top: 200px;
margin-left: -1100px;
}
`

export const Twitter = styled.img`
position: relative;
top: -140px;
right: -1260px;
cursor: pointer;
`
export const Pinterest = styled.img`
position: relative;
top: -140px;
right: -1280px;
cursor: pointer;
`
export const  Instagram = styled.img`
position: relative;
top: -140px;
right: -1300px;
cursor: pointer;
`