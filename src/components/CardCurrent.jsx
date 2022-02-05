import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import moment from 'moment';


const CardRightContainer = styled.div`
  background: rgb(16, 14, 58);
  border-radius: 0 25px 25px 0;
  flex: 0 0 40%;
`;
const H2 = styled.h2`
  width: 100%;
   margin-top: -6rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
  text-transform: capitalize;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgStyle = styled.img`
  align-self: center;
  width: 150px;
  height: 150px;
  object-fit: cover;
  `;

const ImgStyle2 = styled.img`
  text-align: center;
  align-self: center;
  z-index: -1;
  opacity: 0.2;
  width: 200px;
  height: 200px;
  `;

const ParaStyle = styled.p`
  color: #e3f6fe;
  font-size: ${(props) => (props.primary ? "1rem" : "5rem")};
  text-align: center;
  margin-bottom: 0;
`;

const CardCurrent = ({ query }) => {
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const CurrentApi = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${query}&aqi=no`;
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
