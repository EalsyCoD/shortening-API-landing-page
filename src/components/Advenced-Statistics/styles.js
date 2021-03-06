import styled from 'styled-components'



export const Container = styled.header`
padding-top: 60px;
`
export const Wrapper = styled.div`
display: block;
background-color: #EEF0F6;
padding-top:250px;
height: 550px;
@media(max-width: 425px){
  height: 100%;
  padding-bottom: 240px;
}
`
export const Title = styled.h1`
position: relative;
max-width: 400px;
display: block;
margin-left: 720px;
margin-top: -80px;
@media(max-width: 425px){
margin-top: -100px;
margin-left: 30px;
}
`
export const Lable = styled.p`
max-width: 400px;
margin-left: 630px;
max-width: 500px;
text-align: center;
color: ${(props) => props.theme.colors.text};
@media(max-width: 425px){
  max-width: 350px;
margin-top: -10px;
margin-left: 25px;
}
`
export const ImgBrand = styled.img`
position: relative;
margin-left: 65px;
top: -270px;
right: -367px;
@media(max-width: 425px){
margin-top: -5px;
margin-left: -200px;
}
`
export const FrameBrand = styled.p`
width: 300px;
height: 200px;
display: block;
border: 4px solid #fff;
margin-left: 390px;
margin-top: 100px;
background-color: #fff;
border-radius: 10px;
@media(max-width: 425px){
margin-top: 100px;
margin-left: 40px;
}
`
export const Brand = styled.h1`
position: relative;
margin-left: 650px;
font-size: 20px;
max-width:300px;
top:-240px;
right: 232px;
@media(max-width: 425px){
width: 180px;
margin-top: 0px;
margin-left: 335px;
}
`
export const ContextBrand = styled.p`
position: relative;
top: -240px;
margin-left: 420px;
max-width: 260px;
color: ${(props) => props.theme.colors.text};
font-size:14px;
@media(max-width: 425px){
width: 230px;
margin-top: 20px;
margin-left: 80px;
text-align: center;
}
`


export const BorderBrand = styled.p`
position: block;
  margin-top: -465px;
  margin-left: 415px;
  width: 4em;
  height: 4em;
  border: 2px solid ;
  border-radius: 50%;
  background-color: #00003E;
  @media(max-width: 425px){
  margin-top: -455px;
  margin-left: 150px;
}
`

export const FrameDetailed = styled.p `
width: 300px;
height: 200px;
display: block;
border: 4px solid #fff;
margin-left: 750px;
margin-top: -20px;
background-color: #fff;
border-radius: 10px;
@media(max-width: 425px){
  margin-top: 240px;
  margin-left: 40px;
}

`
export const ImgDetailed = styled.img`
position: relative;
margin-left: 60px;
top: -265px;
right: -733px;
@media(max-width: 425px){
margin-top: -10px;
margin-left: -565px;
}
`
export const Detailed = styled.h1`
position: relative;
margin-left: 650px;
font-size: 20px;
max-width:300px;
top:-240px;
right: -125px;
@media(max-width: 425px){
  margin-top: 0px;
  margin-left: -20px;
}
`
export const ContextDetailed = styled.p`
position: relative;
top: -240px;
margin-left: 775px;
max-width: 260px;
color: ${(props) => props.theme.colors.text};
font-size:14px;
@media(max-width: 425px){
  width: 230px;
  margin-top: 10px;
  margin-left: 70px;
  text-align: center;
}
`
export const BorderDetailed = styled.p`
position: block;
margin-top: -460px;
margin-left: 775px;
width: 4em;
height: 4em;
border: 2px solid ;
border-radius: 50%;
background-color: #00003E;
@media(max-width: 425px){
  margin-top: -465px;
  margin-left: 150px;
}
`
export const FrameFully = styled.p `
width: 300px;
height: 200px;
display: block;
border: 4px solid #fff;
margin-left: 1090px;
margin-top: -20px;
background-color: #fff;
border-radius: 10px;
 @media(max-width: 425px){
  margin-top: 250px;
  margin-left: 40px;
}
`
export const ImgFully = styled.img`
position: relative;
margin-left: 20px;
top: -250px;
right: -1108px;
@media(max-width: 425px){
  margin-top: 0px;
margin-left: -940px;
}
`
export const Fully = styled.h1`
position: relative;
margin-left: 650px;
font-size: 20px;
max-width:300px;
top:-225px;
right: -465px;
@media(max-width: 425px){
  margin-top: 0px;
  margin-left: -350px;
}
`
export const ContextFully = styled.p`
position: relative;
top: -220px;
margin-left: 1115px;
max-width: 250px;
color: ${(props) => props.theme.colors.text};
font-size:14px;
  @media(max-width: 425px){
  margin-top: 10px;
  margin-left: 85px;
  text-align: center;
  width: 230px;
}

`
export const BorderFully = styled.p`
position: block;
  margin-top: -450px;
  margin-left: 1115px;
  width: 4em;
  height: 4em;
  border: 2px solid ;
  border-radius: 50%;
  background-color: #00003E;
  @media(max-width: 425px){
  margin-top: -435px;
  margin-left: 155px;
}
 
`

export const LineF = styled.p`
position: relative;
top: -95px;
right: -698px;
border-bottom: 6px solid ;
color: ${(props) => props.theme.colors.topButton};
width: 51px;
@media(max-width: 425px){
  width: 28px;
  transform: rotate(90deg);
  top: -10px;
  margin-left: -525px;
}
`
export const LineB = styled.p`
position: relative;
top: -130px;
right: -1057px;
border-bottom: 6px solid ;
color: ${(props) => props.theme.colors.topButton};
width: 33px;
@media(max-width: 425px){
  width: 36px;
  transform: rotate(90deg);
  top: -2px;
  margin-left: -880px;
}
`