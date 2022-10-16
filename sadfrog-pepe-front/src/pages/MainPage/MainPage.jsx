import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MainSlider from './MainSlider';
import RowProduct from './RowProduct';

const MainPageContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`;

const MainPageContents = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1500px;
    border: 1px solid black;
`;

const MainPageHeader = styled.header``;

const MainPageMenu = styled.div`
    display: flex;
    width: 1500px;
    height: 50px;
    border: 1px black dotted;
    justify-content: space-around;
    align-items: center;

    & > a {
        text-decoration: none;
        color: black;
    }
`;

const MainPageBanner = styled.div`
    width: 1500px;
    display: flex;
    justify-content: space-between;
`;
const MainPage = () => {
    return (
        <MainPageContainer>
            <MainPageContents>
                <MainPageHeader>
                    <MainPageMenu>
                        <Link to="/login">로그인</Link>
                        <Link to="register">회원가입</Link>
                        <a href="##">장바구니</a>
                        <a href="##">마이페이지</a>
                        <a href="##">주문조회</a>
                    </MainPageMenu>
                    <MainPageBanner>
                        <div>상세메뉴</div>
                        <h2>I-Dongmyo</h2>
                        <div>
                            <div>장바구니</div>
                            <div>검색</div>
                        </div>
                    </MainPageBanner>
                    <MainSlider />
                    <RowProduct />
                    <RowProduct />
                    <RowProduct />
                    <RowProduct />
                </MainPageHeader>
            </MainPageContents>
        </MainPageContainer>
    );
};

export default MainPage;
