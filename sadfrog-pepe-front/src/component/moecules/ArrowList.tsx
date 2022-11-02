import React from 'react';
import Arrow, { ArrowType } from '../atoms/arrow/Arrow';
import styled from 'styled-components';

const ArrowContainer = styled.div`
    width: 100%;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate(0, -50%);
`;

export interface ArrowListProps {
    next: React.MouseEventHandler<HTMLButtonElement>;
    prev: React.MouseEventHandler<HTMLButtonElement>;
}

const ArrowList = (props: ArrowListProps) => {
    const { next, prev } = props;

    return (
        <ArrowContainer>
            <Arrow type={ArrowType.LEFT} onClick={prev} />
            <Arrow type={ArrowType.RIGHT} onClick={next} />
        </ArrowContainer>
    );
};

export default ArrowList;
