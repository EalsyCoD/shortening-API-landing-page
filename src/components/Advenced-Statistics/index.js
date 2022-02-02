import React from 'react'

import { Container,
    Wrapper,
    Title,
    Lable,
    ImgBrand,
    Brand,
    ContextBrand, 
    ImgDetailed,
    Detailed,
    ContextDetailed,
    ImgFully,
    Fully,
    ContextFully,
    BorderBrand,
    BorderDetailed,
    BorderFully,
    FrameBrand,
    FrameDetailed,
    FrameFully,
    LineF,
    LineB
  } from './styles'


const Advanced = () =>{
    return(
        <Container>
            <Wrapper>
                <Title>Advanced Statistics</Title>
                <Lable>Track how your links are performing across the web with our advanced 
                    statistics dashboard.
                </Lable>
                
                <FrameBrand></FrameBrand>
                <LineF></LineF>
                <ImgBrand src={'images/icon-brand-recognition.svg'} alt='icon' ></ImgBrand>
                <Brand>Brand Recognition</Brand>
                <ContextBrand>Boost your brand recognition with each click. Generic links dont mean
                    a thing. Branded links help instil confidence in your content.
                </ContextBrand>
                <BorderBrand></BorderBrand>
                <FrameDetailed></FrameDetailed>
                <LineB></LineB>
                <ImgDetailed src={'images/icon-detailed-records.svg'} alt='icon'></ImgDetailed>
                <Detailed>Detailed Records</Detailed>
                <ContextDetailed>Gain insights into who is clicking your links. Knowing
                    when and where people engage with your content helps inform better decisions.
                </ContextDetailed>
                <BorderDetailed></BorderDetailed>
                <FrameFully></FrameFully>
                <ImgFully src={'images/icon-fully-customizable.svg'} alt='icon'></ImgFully>
                <Fully>Fully Custimizable</Fully>
                <ContextFully>Improve brand awareness and content discoverability through 
                    custimizable links, supercharging audience engagement.
                </ContextFully>
                <BorderFully></BorderFully>
            </Wrapper>
        </Container>
    )
}


export default Advanced