import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from 'moment';


const CardRightContainer = styled.div`
  background: rgb(16, 14, 58);
  border-radius: 0 25px 25px 0;
  flex: 0 0 40%;
  @media (max-width: 991px) {
    border-radius: 0 0 25px 25px;
  }
  @media (max-width: 574px) {
    border-radius: 0;
  };
`;
const H2 = styled.h2`
  width: 100%;
  margin-top: -16rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
  text-transform: capitalize;
  @media (max-width: 991px) {
    margin-top: -8rem;
  }
  @media (max-width: 574px) {
    margin-top: -4rem;
  }
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    flex-direction:row;
    justify-content: center;
  }
`;
const ImgStyle = styled.img`
  align-self: center;
  width: 15rem;
  height: 15rem;
  object-fit: cover;
  @media (max-width: 991px) {
    width: 8rem;
    height: 8rem;
  }
  `;

const ImgStyle2 = styled.img`
  text-align: center;
  align-self: center;
  z-index: -1;
  opacity: 0.2;
  width: 20rem;
  height: 20rem;
  @media (max-width: 991px) {
    width: 10rem;
    height: 10rem;
  }
  @media (max-width: 574px) {
    width: 5rem;
    height: 5rem;
  }
  `;

const ParaStyle = styled.p`
  color: #e3f6fe;
  font-size: ${(props) => (props.primary ? "1rem" : "5rem")};
  text-align: center;
  @media (max-width: 991px) {
    font-size: ${(props) => (props.primary ? "1rem" : "3rem")};
  }
  @media (max-width: 574px) {
    font-size: ${(props) => (props.primary ? "1rem" : "2rem")};
  }
`;

const CardCurrent = ({ query }) => {
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const CurrentApi = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`;
    axios.get(CurrentApi).then((res) => {
      setCityWeather(res.data);
    });
  }, [query]);
  if (!cityWeather.current) return null;
  return (
    <CardRightContainer>
      <ImgStyle2 src={cityWeather.current.condition.icon} alt="icon"/>
      <H2 primary>{query}, {cityWeather.location.country}</H2>
      <ParaStyle primary>
      {moment().format('dddd, h:mm a')}
      </ParaStyle>
      <Column>
      <ParaStyle>{cityWeather.current.temp_c}°C</ParaStyle>
      <ImgStyle src={cityWeather.current.condition.icon} alt="icon" />
      </Column>
      <ParaStyle primary>
        Feels like {cityWeather.current.feelslike_c}°C
      </ParaStyle>
      <ParaStyle primary>
        Today
      </ParaStyle>
    </CardRightContainer>
  );
};

export default CardCurrent;
