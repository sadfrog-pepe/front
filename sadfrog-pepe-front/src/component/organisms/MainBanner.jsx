import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import MiniSearch from '../moecules/MiniSearch';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DetailMenu from '../../pages/DetailMenu/DetailMenu';

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
