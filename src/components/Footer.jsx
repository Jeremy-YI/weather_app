import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    position: relative;
    bottom: 0;
    width: 100%; 
    text-align: center;
    padding: 1rem 0 1rem 0;
    `;


const Footer = () => {
    return (
  <FooterStyle>
    &#169;Jessie Yu 2021 All rights reserved.
  </FooterStyle>
    );
};

export default Footer;
