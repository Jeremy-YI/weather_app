import React from 'react';
import styled from 'styled-components';

const ButtonStyle = styled.button`
    background: #68A0F3;
    border: none;
    border-radius: 0.2rem;
    color: #03020D;
    font-size: 0.8rem;
    padding: 6px;
    cursor: pointer;
    &:hover {
        background: #68A0F1;
    }
`;

const Button = () => {
    return (
        <ButtonStyle>
            Search
        </ButtonStyle>
    );

}

export default Button;