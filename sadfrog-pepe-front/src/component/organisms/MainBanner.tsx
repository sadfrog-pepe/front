import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/logo/Logo';

const MainBannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
`;

const MainBanner = () => {
    return (
        <MainBannerContainer>
            <Logo />
        </MainBannerContainer>
    );
};

export default MainBanner;
