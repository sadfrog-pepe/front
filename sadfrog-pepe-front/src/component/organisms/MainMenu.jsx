import React from 'react';
import styled from 'styled-components';
import LinkList from '../moecules/LinkList';

const MainMenuContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px dotted blue;
`;
const DropDownContents = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    width: 900px;
    border: 1px solid black;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
`;

const DropBtn = styled.button`
    background-color: gray;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;

    &:hover ${DropDownContents} {
        display: block;
    }
`;

const DropDown = styled.div`
    position: relative;
    display: inline-block;
    &:hover ${DropBtn} {
        color: gray;
    }
`;

const MainMenu = () => {
    return (
        <MainMenuContainer>
            <DropDown>
                <DropBtn>클릭</DropBtn>
                <DropDownContents>
                    <a href="##">Link 1</a>
                    <a href="##">Link 2</a>
                    <a href="##">Link 3</a>
                </DropDownContents>
            </DropDown>
            <LinkList />
        </MainMenuContainer>
    );
};

export default MainMenu;
