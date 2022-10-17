import React from 'react';
import styled from 'styled-components';
import MainMenu from '../../component/organisms/MainMenu';
import MainBanner from '../../component/organisms/MainBanner';

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
    return (
        <MainPageContainer>
            <MainPageContents>
                <MainPageHeader>
                    <MainMenu />
                    <MainBanner />
                </MainPageHeader>
            </MainPageContents>
        </MainPageContainer>
    );
};

export default MainPage;
