import React from 'react';
import styled from 'styled-components';
import LinkComponent, { LinkSize, LinkTheme } from '../atoms/link/Link';
import Btn from '../atoms/button/Btn';

const MainLinkList = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  /* width는 정해진 레이아웃에 사용하자! */
  /* width: 800px; */
  height: 50px;
  justify-content: space-around;
  align-items: center;
`;

const LinkList = (props: {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <MainLinkList>
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

      <Btn width="50px" type="button" onClick={props.onClick}>
        <i className="ri-search-line"></i>
      </Btn>
    </MainLinkList>
  );
};

export default LinkList;
