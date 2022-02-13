import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Form from "./Form";
import CityCard from "./CityCard";
import Rain from "../assets/rain.png";
import axios from "axios";

const CardLeft = styled.div`
  background: #e3f6fe;
  flex: 0 0 60%;
  border-radius: 25px 0 0 25px;
  text-align: left;
  padding: 0 2rem 0 2rem;
  @media (max-width: 991px) {
    padding: 0 1rem 0 1rem;
    border-radius: 25px 25px 0 0;
  }
  @media (max-width: 574px) {
    border-radius: 0;
  }
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
`;

const Display = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ImgDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const ImgStyle = styled.img`
  text-align: center;
  align-self: center;
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
`;

const ParaStyle = styled.p`
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
  margin-bottom: 2rem;
`;

const Ui = styled.ul`
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 0;
`;

const CardForecast = ({
  value,
  onSubmit,
  onChange,
  query,
  onClickNYC,
  onClickSH,
  onClickSY,
  onClickLondon,
}) => {
  const [cityWeather, setCityWeather] = useState({});

  useEffect(() => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const ForecastApi = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&days=3&q=${query}&aqi=no`;
    axios.get(ForecastApi).then((res) => {
      setCityWeather(res.data);
    });
  }, [query]);
  if (!cityWeather.forecast) return null;
  return (
    <CardLeft>
      <Form value={value} onSubmit={onSubmit} onChange={onChange} />
      <H2>Weather Forecast</H2>
      <CityCard
        onClickNYC={onClickNYC}
        onClickSH={onClickSH}
        onClickSY={onClickSY}
        onClickLondon={onClickLondon}
      />
      <ParaStyle>Weekly forecast for the next 3 days</ParaStyle>
      <Ui>
        <Li>
          <Display>
            <ParaStyle>{cityWeather.forecast.forecastday[0].date}</ParaStyle>
            <ImgDiv>
              <ImgStyle src={Rain} alt="rain icon" />
              <ParaStyle>
                {cityWeather.forecast.forecastday[0].day.daily_chance_of_rain}%
              </ParaStyle>
            </ImgDiv>
            <ImgStyle
              src={cityWeather.forecast.forecastday[0].day.condition.icon}
              alt="icon"
            />
            <ParaStyle>
              {cityWeather.forecast.forecastday[0].day.maxtemp_c}°C
            </ParaStyle>
            <ParaStyle>
              {cityWeather.forecast.forecastday[0].day.mintemp_c}°C
            </ParaStyle>
          </Display>
          <Display>
            <ParaStyle>{cityWeather.forecast.forecastday[1].date}</ParaStyle>
            <ImgDiv>
              <ImgStyle src={Rain} alt="rain icon" />
              <ParaStyle>
                {cityWeather.forecast.forecastday[1].day.daily_chance_of_rain}%
              </ParaStyle>
            </ImgDiv>
            <ImgStyle
              src={cityWeather.forecast.forecastday[1].day.condition.icon}
              alt="icon"
            />
            <ParaStyle>
              {cityWeather.forecast.forecastday[1].day.maxtemp_c}°C
            </ParaStyle>
            <ParaStyle>
              {cityWeather.forecast.forecastday[1].day.mintemp_c}°C
            </ParaStyle>
          </Display>
          <Display>
            <ParaStyle>{cityWeather.forecast.forecastday[2].date}</ParaStyle>
            <ImgDiv>
              <ImgStyle src={Rain} alt="rain icon" />
              <ParaStyle>
                {cityWeather.forecast.forecastday[2].day.daily_chance_of_rain}%
              </ParaStyle>
            </ImgDiv>
            <ImgStyle
              src={cityWeather.forecast.forecastday[2].day.condition.icon}
              alt="icon"
            />
            <ParaStyle>
              {cityWeather.forecast.forecastday[2].day.maxtemp_c}°C
            </ParaStyle>
            <ParaStyle>
              {cityWeather.forecast.forecastday[2].day.mintemp_c}°C
            </ParaStyle>
          </Display>
        </Li>
      </Ui>
    </CardLeft>
  );
};

export default CardForecast;
