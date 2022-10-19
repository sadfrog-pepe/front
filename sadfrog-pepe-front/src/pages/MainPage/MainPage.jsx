import React, { useState } from 'react';
import styled from 'styled-components';
import MainMenu from '../../component/organisms/MainMenu';
import MainBanner from '../../component/organisms/MainBanner';
import DetailMenu from '../DetailMenu/DetailMenu';
import MainProduction from '../../component/organisms/MainProduction';
import MainCarousel from '../../component/organisms/MainCarousel';

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
`;

const MainPageHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const MainPageBody = styled.section`
    width: 100%;
    border: 1px solid black;
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
                <MainPageBody>
                    <MainCarousel />
                </MainPageBody>
            </MainPageContents>
        </MainPageContainer>
    );
};

export default MainPage;
