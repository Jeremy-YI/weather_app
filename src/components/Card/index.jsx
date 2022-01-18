import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 50rem;
    margin: 0 auto;
    border: 1px solid black;
`;

const CardStyle1 = styled.div`
    background: #E3F6FE;
    flex-grow: 2;
`;

const CardStyle2 = styled.div`
    background: #03020D;
`;
const TitleStyle = styled.h2`
    font-size: 3rem;
    color: #000;
    text-align: center;
    margin-top: 10rem;
`;
const TextStyle = styled.p`
    color: #000;
    text-align: center;
`;


const Card = () => {
    return (
    <Container>
        <CardStyle1>blue</CardStyle1>
        <CardStyle2>
            <TitleStyle>Weather Finder</TitleStyle>
            <TextStyle>Find out temperature, conditions and more...</TextStyle>
        </CardStyle2>  
    </Container>
    )
    };

export default Card;