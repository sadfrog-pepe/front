import React from 'react';
import styled from 'styled-components';
import LinkComponent from '../atoms/Link';

const MainLinkList = styled.div`
    display: flex;
    width: 1500px;
    height: 50px;
    border: 1px black dotted;
    justify-content: space-around;
    align-items: center;
`;

const LinkList = () => {
    return (
        <MainLinkList>
            <LinkComponent to={'/login'}>로그인</LinkComponent>
            <LinkComponent to={'/register'}>회원가입</LinkComponent>
            <LinkComponent to={'/##'}>장바구니</LinkComponent>
            <LinkComponent to={'/##'}>마이페이지</LinkComponent>
            <LinkComponent to={'/##'}>주문조회</LinkComponent>
        </MainLinkList>
    );
};

export default LinkList;
