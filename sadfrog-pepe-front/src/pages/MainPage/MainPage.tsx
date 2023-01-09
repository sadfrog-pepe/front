import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const MainPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MainPageContents = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const MainPageHeader = styled.header`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// `;

const MainPageBody = styled.section`
  width: 100%;
  border: 1px solid black;
`;

const MainPage = () => {
  return (
    <MainPageContainer>
      <MainPageContents>
        <MainPageBody></MainPageBody>
      </MainPageContents>
    </MainPageContainer>
  );
};

export default MainPage;
