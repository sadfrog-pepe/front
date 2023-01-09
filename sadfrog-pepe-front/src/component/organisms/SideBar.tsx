import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import LinkComponent, { LinkSize, LinkTheme } from '../atoms/link/Link';

const showUp = keyframes`
  0% {
      transform: translate(-100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
`;

const showDown = keyframes`
  0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
    }
`;

const SideBarContainer = styled.div<{ isShow?: boolean }>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.7);
  display: none;
  ${(props) =>
    props.isShow &&
    css`
      display: block;
    `};
`;

const SideBarContents = styled.div<{ isShow?: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  width: 350px;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);

  ${(props) =>
    props.isShow &&
    css`
      animation: ${showUp} 1s forwards;
    `}

  ${(props) =>
    !props.isShow &&
    css`
      animation: ${showDown} 1s forwards;
    `}
`;

const SideBarCloseButton = styled.span`
  position: absolute;
  right: -2rem;
  top: 0.5rem;
  color: white;
  font-size: 2rem;
  cursor: pointer;

  animation: 1.25s btnShowUp;
  animation: 1.5s btnOpacity;

  @keyframes btnShowUp {
    0% {
      transform: translate(-250%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes btnOpacity {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

const SideBarLogin = styled.div`
  box-sizing: border-box;
  height: 50px;
  padding: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f1ebdf;

  & button {
    border: none;
  }

  & button i {
    margin-right: 0.5rem;
  }
`;

const SideBarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  background-color: white;
`;

const SideBarMenu = styled.section``;

const SideBar = (props: { isShow?: boolean; setIsShow?: any }) => {
  const { isShow, setIsShow } = props;
  console.log(isShow);
  return (
    <SideBarContainer isShow={isShow}>
      <SideBarContents isShow={isShow}>
        {/* close button */}
        <SideBarCloseButton onClick={() => setIsShow(!isShow)}>
          <i className="ri-close-line"></i>
        </SideBarCloseButton>

        <SideBarMenu>
          <SideBarLogin>
            <button>
              <i className="ri-user-line"></i>로그인
            </button>
          </SideBarLogin>
          <SideBarList>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              여성
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
              color="gold"
            >
              프리미엄
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              남성
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              신상품
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              아우터
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              상의
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              팬츠
            </LinkComponent>
            <LinkComponent
              to={'/##'}
              size={LinkSize.MEDIUM}
              theme={LinkTheme.DEFAULT}
            >
              악세서리
            </LinkComponent>
          </SideBarList>
        </SideBarMenu>
      </SideBarContents>
    </SideBarContainer>
  );
};

export default SideBar;
