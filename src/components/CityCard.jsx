import React from 'react'
import styled from 'styled-components'
import NYC from '../assets/NYC.jpeg'
import SHANGHAI from '../assets/SHANGHAI.jpeg'
import SYDNEY from '../assets/SYDNEY.jpeg'
import LONDON from '../assets/LONDON.jpeg'

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CardContainer = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: none;
    border: none;
`;

const CardStyle = styled.img`
    width: 8rem;
    height: 10rem;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`;
const Label = styled.p`
    font-size: 1rem;
`;


const CityCard = () => {
    return(
    <Container>
        <CardContainer>
            <CardStyle src={NYC} alt="NYC" />
            <Label>New York</Label> 
        </CardContainer>
        <CardContainer>
            <CardStyle src={SHANGHAI} alt="SHANGHAI"/>
            <Label>Shanghai</Label>
        </CardContainer>
        <CardContainer>
            <CardStyle src={SYDNEY} alt="SYDNEY"/>
            <Label>Sydney</Label>
        </CardContainer>
        <CardContainer>
            <CardStyle src={LONDON} alt="LONDON"/>
            <Label>London</Label>
        </CardContainer>
    </Container>
    )
}

export default  CityCard;