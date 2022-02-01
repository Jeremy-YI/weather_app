import React from "react";
import styled from "styled-components";
import Form from "./Form";
import CityCard from "./CityCard";
//import axios from "axios";

const CardLeft = styled.div`
  background: #e3f6fe;
  flex: 0 0 60%;
  border-radius: 25px 0 0 25px;
  text-align: left;
`;

const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 300;
  margin-left: 2rem;
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
`;

const ParaStyle = styled.p`
  margin-left: 2rem;
  color: ${(props) => (props.primary ? "#e3f6fe" : "#03020d")};
`;

const Ui = styled.ul`

  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  list-style: none;
  padding: 0;
`;

const CardForecast = ({ value, onSubmit, onChange }) => {
  return (
    <CardLeft>
      <Form value={value} onSubmit={onSubmit} onChange={onChange} />
      <H2>Weather Forecast</H2>
      <CityCard/> 
      <ParaStyle>Weekly forecast for the next 3 days</ParaStyle>
      <Ui>
        <Li>
          <ParaStyle>Monday</ParaStyle>
          <ParaStyle>Tuesday</ParaStyle>
          <ParaStyle>Wednesday</ParaStyle>
        </Li>
      </Ui>
    </CardLeft>
  );
};

export default CardForecast;
