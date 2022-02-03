import React from 'react'


import {
    Container,
    Wrapper,
    Logo,
    Features,
    LinkShortening ,
    BrandedLinks,
    Analytics,
    Resources,
    Blog,
    Developers,
    Support,
    Company,
    About,
    OurTeam,
    Careers,
    Contact,
    Facebook,
    Twitter,
    Pinterest,
    Instagram} from './styles'

const Footer = () => {
    return(
        <Container>
            <Wrapper>
                <Logo src={'images/logo.svg'} alt="icon"></Logo>
                <Features>Features</Features>
                <LinkShortening href="#">Link Shortening</LinkShortening>
                <BrandedLinks href="#">Branded Links</BrandedLinks>
                <Analytics href="#">Analytics</Analytics>
                <Resources>Resources</Resources>
                <Blog href="#">Blog</Blog>
                <Developers href="#">Developers</Developers>
                <Support href="#">Support</Support>
                <Company>Company</Company>
                <About href="#">About</About>
                <OurTeam href="#">Our Team</OurTeam>
                <Careers href="#">Careers</Careers>
                <Contact href="#">Contact</Contact>
                <Facebook src={'images/icon-facebook.svg'} alt="icon" ></Facebook>
                <Twitter src={'images/icon-twitter.svg'} alt="icon"></Twitter>
                <Pinterest src={'images/icon-pinterest.svg'} alt="icon"></Pinterest>
                <Instagram src={'images/icon-instagram.svg'} alt="icon"></Instagram>
            </Wrapper>
        </Container>
    )
}

export default Footer