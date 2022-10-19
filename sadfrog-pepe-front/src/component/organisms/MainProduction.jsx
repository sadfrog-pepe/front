import React from 'react';
import styled from 'styled-components';

const ProductionContainer = styled.div`
    width: 100%;
    height: 50px;
    border: 1px solid black;
`;

const MainProduction = () => {
    return (
        <ProductionContainer>이건 광고에요. 메인 광고요</ProductionContainer>
    );
};

export default MainProduction;
