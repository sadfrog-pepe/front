import React from 'react';
import styled, { css } from 'styled-components';
import LinkList from '../moecules/LinkList';

const MainMenuContainer = styled.div`
    width: 100%;
`;

const MainMenu = () => {
    return (
        <MainMenuContainer>
            <LinkList />
        </MainMenuContainer>
    );
};

export default MainMenu;
