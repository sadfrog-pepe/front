import React from 'react';
import styled from 'styled-components';

const logoUrl = '../../assets/ourLogo.png';

const LogoContainer = styled.div`
    width: 100px;
    height: 50px;
    border: 1px solid black;
    background-image: url('https://vinzip.kr/web/upload/NNEditor/20211230/418f931a6cd13d65f90bec9cd56bad91.jpg');
    background-repeat: no-repeat;
    background-size: contain;
`;

const Logo = () => {
    return <LogoContainer></LogoContainer>;
};

export default Logo;
