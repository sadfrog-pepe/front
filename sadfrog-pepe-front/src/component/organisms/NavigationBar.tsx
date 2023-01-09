import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import LinkList from '../moecules/LinkList';
import Carousel from '../moecules/Carousel';
import { useMediaQuery } from 'react-responsive';

const NavigationContainer = styled.nav`
  width: 1024px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
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
  const isDesktop: boolean = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet: boolean = useMediaQuery({
    query: '(min-width : 768px) and (max-width : 1023px)',
  });
  const [isActive, setIsActive] = useState(false);

  return (
    <NavigationContainer>
      {isDesktop && (
        <>
          {/* 메뉴 */}
          <LinkList onClick={() => setIsActive(!isActive)} />
          {/* 검색 창 */}
          <NavigationSearch isActive={isActive}>
            <NavigationInput />
          </NavigationSearch>
          <Carousel />
        </>
      )}

      {isTablet && (
        <>
          <div
            style={{
              textAlign: 'center',
              fontSize: 'small',
              marginBottom: '1rem',
            }}
          >
            회원 혜택: 3만원 이상 무료배송 & 첫 구매 10% 할인
          </div>
          <Carousel />
        </>
      )}
    </NavigationContainer>
  );
};

export default NavigationBar;
