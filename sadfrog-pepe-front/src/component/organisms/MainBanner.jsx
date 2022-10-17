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

const MainBanner = () => {
    const [isShowMenu, setIsShowMenu] = useState(false);

    return (
        <MainBannerContainer>
            {isShowMenu ? <DetailMenu /> : null}
            <Button.icon
                icon={faBars}
                onClick={() => setIsShowMenu(!isShowMenu)}
            ></Button.icon>
            <Logo />
            <MiniSearch />
        </MainBannerContainer>
    );
};

export default MainBanner;
