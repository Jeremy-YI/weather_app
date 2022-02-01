import React, {useState} from "react";
import styled from "styled-components";
import Button from "./Button";
import SearchIcon from '@mui/icons-material/Search';

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

const Form = () => {
  const [city, setCity] = useState("");
  const handleChange = (e) => {
    setCity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
  };

  return (
    <Wrapper >
      <SearchIcon />
      <Input
        type="text"
        placeholder="Search for a city"
        value={city}
        onChange={handleChange}
      />
    <Button type="submit" onClick={handleSubmit}/>
    </Wrapper>
  );
};

export default Form;
