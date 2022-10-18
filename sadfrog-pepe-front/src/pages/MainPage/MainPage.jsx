import React, { useState } from 'react';
import styled from 'styled-components';
import MainMenu from '../../component/organisms/MainMenu';
import MainBanner from '../../component/organisms/MainBanner';
import DetailMenu from '../DetailMenu/DetailMenu';

const MainPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const MainPageContents = styled.div`
    width: 1500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
`;

const MainPageHeader = styled.header``;

const MainPage = () => {
    const [showDetailMenu, setShowDetailMenu] = useState(false);

    // const toggleDetailMenu = () => {
    //     setShowDetailMenu((prev) => !prev);
    //     console.log('click!');
    // };

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
            {/* {showDetailMenu && (
                <DetailMenu toggleDetailMenu={toggleDetailMenu} />
            )} */}

            <DetailMenu
                isShow={showDetailMenu}
                hideDetailMenu={hideSideDetailMenu}
            />
            <MainPageContents>
                <MainPageHeader>
                    <MainMenu />
                    <MainBanner showDetailMenu={showSideDetailMenu} />
                </MainPageHeader>
            </MainPageContents>
        </MainPageContainer>
    );
};

export default MainPage;
