import React from 'react';
import styled from 'styled-components';
import Logo from '../atoms/logo/Logo';
import { useMediaQuery } from 'react-responsive';

const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

const HeaderLeftMenu = styled.div`
  flex-basis: calc(100% / 3);
  & ul {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
`;

const HeaderRightMenu = styled.div`
  flex-basis: calc(100% / 3);
  position: relative;

  & ul {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }

  & ul li i {
    padding: 0 0.5rem;
  }

  @media screen and (max-width: 1023px) {
    font-size: 2rem;
  }
`;

const HeaderLogoBox = styled.div`
  flex-basis: calc(100% / 3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Header = () => {
  const isDesktop: boolean = useMediaQuery({
    query: '(min-width:1024px)',
  });
  const isTablet: boolean = useMediaQuery({
    query: '(min-width : 768px) and (max-width : 1023px)',
  });

  return (
    <HeaderContainer>
      {isDesktop && (
        <>
          <HeaderLeftMenu>
            <ul>
              <li>고객 서비스</li>
              <li>뉴스레터</li>
              <li>매장 찾기</li>
              <li>더보기</li>
            </ul>
          </HeaderLeftMenu>
          <HeaderLogoBox>
            <Logo />
          </HeaderLogoBox>
          <HeaderRightMenu>
            <ul>
              <li>
                <i className="ri-user-line"></i>로그인
              </li>
              <li>
                <i className="ri-service-line"></i>즐겨찾기
              </li>
              <li>
                <i className="ri-shopping-bag-line"></i>쇼핑백
              </li>
            </ul>
          </HeaderRightMenu>
        </>
      )}
      {isTablet && (
        <>
          <HeaderButton>
            <i className="ri-menu-line"></i>
          </HeaderButton>
          <HeaderLogoBox>
            <Logo />
          </HeaderLogoBox>
          <HeaderRightMenu>
            <ul>
              <li>
                <i className="ri-user-line"></i>
              </li>
              <li>
                <i className="ri-search-line"></i>
              </li>
              <li>
                <i className="ri-service-line"></i>
              </li>
              <li>
                <i className="ri-shopping-bag-line"></i>
              </li>
            </ul>
          </HeaderRightMenu>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
