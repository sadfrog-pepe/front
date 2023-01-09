import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import LinkList from '../moecules/LinkList';
import MainCarousel from './MainCarousel';

const NavigationContainer = styled.nav`
  width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const NavigationContents = styled.div``;

const InputButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 10px;
  margin: auto;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: trasform 0.6s cubic-bezier(0.9, 0, 0.3, 0.9);
`;

const NavigationSearch = styled.div<{ isActive: boolean }>`
  position: relative;
  width: 0;
  height: 50px;
  margin: 0 auto;
  margin-bottom: 1rem;
  background-color: white;
  box-shadow: 0 4px 24px hsla(222, 68%, 12%, 0.1);
  border: 1px solid lightgray;
  border-radius: 4rem;
  transition: width 1s cubic-bezier(0.9, 0, 0.3, 0.9);
  transition-delay: 1s;
  display: none;

  ${(props) =>
    props.isActive &&
    css`
      display: block;
      width: 75%;
    `}
`;

const NavigationInput = styled.input`
  box-sizing: border-box;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  border-radius: 4rem;
  font-size: medium;
  padding: 25px;
  font-weight: 500;
`;

const NavigationBar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <NavigationContainer>
      <NavigationContents>
        {/* 메뉴 */}
        <LinkList onClick={() => setIsActive(!isActive)} />
        {/* 검색 창 */}
        <NavigationSearch isActive={isActive}>
          <NavigationInput />
        </NavigationSearch>
      </NavigationContents>
      <MainCarousel />
    </NavigationContainer>
  );
};

export default NavigationBar;
