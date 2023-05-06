import React from 'react'
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>Created by Annika and Fiona</FooterText>
      <IconContainer>
        <a href="https://annikalindberg-portfolio.netlify.app/">
          <FooterImage src="/images/Annika-Lindberg.jpg" className="contact-logo" alt="link to Annika's portfolio" />
        </a>
        <a href="https://fiona-klacar-portfolio.netlify.app/">
          <FooterImage src="/images/Fiona-Klacar.jpg" className="contact-logo" alt="link to Fiona's portfolio" />
        </a>
      </IconContainer>
      <FooterText>Technigo Bootcamp Spring 2023</FooterText>
    </FooterWrapper>
  )
}
const FooterWrapper = styled.div`
  margin: auto;
  padding: 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(138 106 148 / 80%);
  border-top: 2px solid black;
  opacity: 0.95;

  @media (max-width: 604px) {
    flex-direction: column;
    align-items: center;
  }
`

const IconContainer = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 8px;
  margin-right: 8px;
`

const FooterText = styled.p`
  @media(max-width: 604px) {
    font-size: 10px;
    margin: 5px 0;
  }
`

const FooterImage = styled.img`
  width: 30px;
  padding-left: 5px;
  padding-right: 5px;
  opacity: 0.8;

  &:hover {
    transform: scale(1.2);
  }

  @media(max-width: 604px) {
    width: 15px;
  }
`

export default Footer;