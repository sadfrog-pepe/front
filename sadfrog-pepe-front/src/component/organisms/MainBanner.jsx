import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Logo from '../atoms/Logo';
import MiniSearch from '../moecules/MiniSearch';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import DetailMenu from '../../pages/DetailMenu/DetailMenu';

const MainBannerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const MainBanner = ({ showDetailMenu }) => {
    return (
        <MainBannerContainer>
            {/* <Button.icon
                icon={faBars}
                onClick={() => toggleDetailMenu()}
            ></Button.icon> */}
            <button type="button" onClick={() => showDetailMenu()}>
                클릭
            </button>
            <Logo />
            <MiniSearch />
        </MainBannerContainer>
    );
};

export default MainBanner;
