import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/Logo';

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

            <Logo />
        </MainBannerContainer>
    );
};

export default MainBanner;
