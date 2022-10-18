import React from 'react';
import styled from 'styled-components';

const logoUrl = '../../assets/ourLogo.png';

const LogoContainer = styled.div`
    width: 100px;
    height: 50px;
    border: 1px solid black;
    background-image: url('../../assets/ourLogo.png');
    background-size: contain;
`;

const Logo = () => {
    return <LogoContainer>I-Dongmyo</LogoContainer>;
};

export default Logo;
