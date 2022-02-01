import React from "react";
import styled from "styled-components";
import Button from "./Button";
//import SearchIcon from '@mui/icons-material/Search';

const Wrapper = styled.form`
  margin: 2rem;
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  border: none;
  height: 2rem;
  width: 50%;
`;

const Form = ({value, onSubmit, onChange}) => {

  return (
    <Wrapper  onSubmit={onSubmit}>
      {/* <SearchIcon /> */}
      <Input
        type="text"
        placeholder="Search for a city"
        value={value}
        onChange={onChange}
      />
    <Button type="submit" />
    </Wrapper>
  );
};

export default Form;
