import React, { useState } from 'react';
import styled from 'styled-components';
import MainMenu from '../../component/organisms/MainMenu';
import MainBanner from '../../component/organisms/MainBanner';
import DetailMenu from '../DetailMenu/DetailMenu';
import MainProduction from '../../component/organisms/MainProduction';

const MainPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const MainPageContents = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

const MainPageHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainPage = () => {
    const [showDetailMenu, setShowDetailMenu] = useState(false);

    const showSideDetailMenu = () => {
        setShowDetailMenu(true);
        document.body.style.overflow = 'hidden';
    };

    const hideSideDetailMenu = () => {
        setShowDetailMenu(false);
        document.body.style.overflow = 'unset';
    };
    return (
        <MainPageContainer>
            <DetailMenu
                isShow={showDetailMenu}
                hideDetailMenu={hideSideDetailMenu}
            />
            <MainPageContents>
                {/* 광고판 */}
                <MainProduction />
                {/* 헤더 */}
                <MainPageHeader>
                    <MainBanner showDetailMenu={showSideDetailMenu} />
                    <MainMenu />
                </MainPageHeader>
            </MainPageContents>
        </MainPageContainer>
    );
};

export default MainPage;
