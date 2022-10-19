import React from 'react';
import styled from 'styled-components';

const LOGO_URL = 'images/ourLogo.png';

const LogoContainer = styled.div`
    width: 200px;
    height: 100px;
    background-image: url(${LOGO_URL});
    background-repeat: no-repeat;
    background-size: contain;
`;

const Logo = () => {
    return <LogoContainer></LogoContainer>;
};

export default Logo;
