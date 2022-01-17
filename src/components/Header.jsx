import React from 'react';
import styled from 'styled-components';
import Background from '../assets/background.mp4'

const Vdo = styled.video`
    position: fixed;
    min-width: 100%;
    min-height: 100%;
`;

const Header = () => {
    return (
        <>
        <Vdo autoPlay muted loop>   
            <source src={Background} type="video/mp4" />
            </Vdo>
        </>
    );
}

export default Header;