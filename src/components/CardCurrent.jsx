import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const CardRightContainer = styled.div`
  background: rgb(16, 14, 58);
  border-radius: 0 25px 25px 0;
  flex: 0 0 40%;
`;
const H2 = styled.h2`
  width: 100%;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  text-align: center;
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgStyle = styled.img`
  text-align: center;
  align-self: center;
`;
const ParaStyle = styled.p`
  color: #e3f6fe;
  font-size: ${(props) => (props.primary ? "1rem" : "3rem")};
  text-align: center;
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
      <H2 primary>{query}, {cityWeather.location.country}</H2>
      <ParaStyle primary>
        {cityWeather.location.localtime}
      </ParaStyle>
     
      <Column>
        <ParaStyle>
        Today
      </ParaStyle>
      <ImgStyle src={cityWeather.current.condition.icon} alt="icon" />
      </Column>
      <ParaStyle>{cityWeather.current.temp_c}°C</ParaStyle>
      <ParaStyle primary>
        Feels like {cityWeather.current.feelslike_c}°C
      </ParaStyle>
    </CardRightContainer>
  );
};

export default CardCurrent;
