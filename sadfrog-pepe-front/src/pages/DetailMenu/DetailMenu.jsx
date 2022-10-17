import React from 'react';
import styled from 'styled-components';

const DetailMenuContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.7);
`;
const DetailMenu = () => {
    return <DetailMenuContainer>디테일한 메뉴</DetailMenuContainer>;
};

export default DetailMenu;
