import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MainCarousel from '../../component/organisms/MainCarousel';
import axios from 'axios';

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
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:4000/users');
        setUsers(response.data);
        console.log(response.data);
    };

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
