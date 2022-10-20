import React from 'react';
import styled from 'styled-components';
import Arrow, { ArrowType } from '../atoms/arrow/Arrow';
import Button, {
    ButtonType,
    ButtonTheme,
    ButtonSize,
} from '../atoms/button/Button';
import { Logo } from '../atoms/logo/Logo';

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
