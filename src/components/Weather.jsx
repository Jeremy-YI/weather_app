import React from "react";
import styled from "styled-components";
import Card from "./Card";
import CardRight from "./CardRight";  

const Wrapper = styled.section`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: ${props => props.background};
`;
const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 60%;
    margin: 0 auto;
    margin-top: 10%;
`;

const Weather = () => {
    
    return (
        <Wrapper background="#68A0F3">
        <Container>
            <Card />
            <CardRight />
        </Container>
        </Wrapper>
        
    );
    }

export default Weather;