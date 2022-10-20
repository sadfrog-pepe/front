import React from 'react';
import styled from 'styled-components';
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

const MainBanner = ({ showDetailMenu }) => {
    return (
        <MainBannerContainer>
            {/* <button type="button" onClick={() => showDetailMenu()}>
                클릭
            </button> */}
            <Button
                onClick={() => showDetailMenu()}
                type={ButtonType.BUTTON}
                theme={ButtonTheme.ROUNDED}
                size={ButtonSize.LARGE}
            >
                Click
            </Button>

            <Logo />
        </MainBannerContainer>
    );
};

export default MainBanner;
