import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
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

// const MainPageHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

const MainPageBody = styled.section`
    width: 100%;
    border: 1px solid black;
`;

const MainPage = () => {
    console.log(localStorage.getItem('refreshToken'));
    return (
        <MainPageContainer>
            <MainPageContents>
                <MainPageBody>
                    <MainCarousel />
                </MainPageBody>
            </MainPageContents>
        </MainPageContainer>
    );
};

export default MainPage;
