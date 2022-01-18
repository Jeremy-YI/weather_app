import React from "react";
import styled from "styled-components";

// const Wrapper= styled.section`
//   background: #68A0F3;
// `;

const TitleStyle = styled.h1`
  font-size: 3rem;
  color: #03020D;
  text-shadow: 0 0 3px #fff;
`;

const Header = () => {
  return (
    <>
      <TitleStyle>Weather Forecast</TitleStyle>
    </>
  );
};

export default Header;
