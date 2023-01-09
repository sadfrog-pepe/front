import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import Logo from '../atoms/logo/Logo';
import styles from './MainBanner.module.css';

const Header = styled.header`
  width: 100%;
  height: 150px;
`;

const HeaderContainer = styled.div`
  max-width: 1024px;
  display: flex;
`;

const HeaderMobileContainer = styled.div`
  ${HeaderContainer}
  justify-content: space-between;
`;

const HeaderPcContainer = styled.div`
  ${HeaderContainer}
  justify-content: space-between;
`;

// const HeaderMenuMobile;

const MainBanner = () => {
  const isMobile = useMediaQuery({ query: 'max-width : 767px' });
  const isPc = useMediaQuery({
    query: 'min-width:768px',
  });
  return (
    <Header>
      {isMobile && (
        <HeaderMobileContainer>
          <Logo />
          <div className="header__menu">헤더 메뉴</div>
        </HeaderMobileContainer>
      )}
      {isPc && (
        <HeaderPcContainer>
          <div className="header__menu">
            <ul>
              <li>고객 서비스</li>
              <li>뉴스레터</li>
              <li>매장찾기</li>
              <li>더보기</li>
            </ul>
          </div>
          <Logo />
          <div className="header__menu">헤더 메뉴</div>
        </HeaderPcContainer>
      )}
    </Header>
  );
};

export default MainBanner;

{
  /* {isTablet && (
        <>
          <div className="header__menu">
            <ul>
              <li>고객 서비스</li>
              <li>뉴스레터</li>
              <li>매장찾기</li>
              <li>더보기</li>
            </ul>
          </div>
          <Logo />
          <div className="header__menu">헤더 메뉴</div>
        </>
      )} */
}
