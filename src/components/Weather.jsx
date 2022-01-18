import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Card from "./Card";

const Wrapper = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.background};
`;



const Weather = () => {
    return (
        <Wrapper background="#68A0F3">
        <Header />
        <Card />
        </Wrapper>
    );
    }

export default Weather;