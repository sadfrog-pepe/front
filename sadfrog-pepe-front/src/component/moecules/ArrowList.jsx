import React from 'react';
import Arrow, { ArrowType } from '../atoms/arrow/Arrow';
import styled from 'styled-components';

const ArrowContainer = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
`;

const ArrowList = (props) => {
    const { next, prev } = props;

    return (
        <ArrowContainer>
            <Arrow type={ArrowType.LEFT} onClick={prev} />
            <Arrow type={ArrowType.RIGTH} onClick={next} />
        </ArrowContainer>
    );
};

export default ArrowList;
