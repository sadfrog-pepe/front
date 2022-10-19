import React from 'react';
import styled from 'styled-components';
import LinkComponent from '../atoms/Link';

const MainLinkList = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 800px;
    height: 50px;
    justify-content: space-around;
    align-items: center;
`;

const LinkList = () => {
    return (
        <MainLinkList>
            <LinkComponent to={'/##'}>[브랜드]</LinkComponent>
            <LinkComponent to={'/##'} color="gold">
                [프리미엄]
            </LinkComponent>
            <LinkComponent to={'/##'}>[SET]</LinkComponent>
            <LinkComponent to={'/##'}>[미사용품]</LinkComponent>
            <LinkComponent to={'/##'}>[신상품]</LinkComponent>
            <LinkComponent to={'/##'}>[아우터]</LinkComponent>
            <LinkComponent to={'/##'}>[상의]</LinkComponent>
            <LinkComponent to={'/##'}>[팬츠]</LinkComponent>
            <LinkComponent to={'/##'}>[For woman]</LinkComponent>
        </MainLinkList>
    );
};

export default LinkList;
