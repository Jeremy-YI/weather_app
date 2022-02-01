import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";


const CardRightContainer = styled.div`
  background: rgb(16, 14, 58);
  border-radius: 0 25px 25px 0;
  flex: 0 0 40%;
  padding: 1rem;
`;
const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 2rem;
  color: ${props => props.primary ?  '#e3f6fe' : '#03020d'};
`;
const TitleStyle = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ImgStyle = styled.img`
  text-align: center;
  align-self: center;
`;
const ParaStyle = styled.p`
  color: ${props => props.primary ?  '#e3f6fe' : '#03020d'};
  text-align: center;
`;
const TextStyle = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  margin-top: 2rem;
  text-align: center;
  color: #e3f6fe;
`;


const API_KEY = process.env.REACT_APP_API_KEY;
const city = "London";
const CurrentApi = `http://api.weatherapi.com/v1/current.json?key=${API_KEY} &q=${city}&aqi=no`;

const CardRight = ({city}) => {
    const [cityWeather, setCityWeather] = useState({});
    
    useEffect(() => {
    axios.get(CurrentApi).then((res) => {
        setCityWeather(res.data);
    });
    }, [city]);
    if (!cityWeather.current) return null;
    return (
        <CardRightContainer>
            <ParaStyle primary>
            city, {cityWeather.location.country}
            </ParaStyle>
            <TitleStyle>
            <ImgStyle src={cityWeather.current.condition.icon} alt="icon" />
            <H2 primary>Today</H2>
            </TitleStyle>
            <TextStyle>{cityWeather.current.temp_c}°C</TextStyle>
            <ParaStyle primary>Feels like {cityWeather.current.feelslike_c}°C</ParaStyle>
        </CardRightContainer>
    )}

export default CardRight ;
