import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainCarousel from '../../component/organisms/MainCarousel';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../modules/index';

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
    const users = useSelector((state: RootState) => state.user);
    console.log(users);

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
