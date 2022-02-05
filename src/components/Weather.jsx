import React, { useState } from "react";
import styled from "styled-components";
import CardForecast from "./CardForecast";
import CardCurrent from "./CardCurrent";

const Wrapper = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: ${(props) => props.background};
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  margin-top: 5%;

  @media (max-width: 768px) {
    width: 60%;
`;

const Weather = () => {
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    city === "" ? alert("Please enter a city") : setQuery(city);
  };

  // console.log(navigator.geolocation)

  return (
    <Wrapper background="#68A0F3">
      <Container>
        <CardForecast
          value={city}
          onChange={handleChange}
          onSubmit={handleSubmit}
          query={query || "Perth"}
          onClickNYC={() => setQuery("New York")}
        />
        <CardCurrent query={query || "Perth"} />
      </Container>
    </Wrapper>
  );
};

export default Weather;
