import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
    width: 100%;
    height: 400px;
    overflow-x: hidden;

    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        display: none;
    }
`;

const CarouselImageList = styled.div`
    width: 100%;
    display: flex;
    transition: all 4s ease 0s;
    transform: ${(props) => 'translateX(-' + props.count * 100 + '%)'};
`;
const CarouselImage = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${(props) => props.background});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    flex: none;
`;
const MainCarousel = () => {
    const IMG = ['images/1.png', 'images/2.png', 'images/3.png']; // dummy data
    const TOTAL_LENGTH = IMG.length - 1;

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => (prev === TOTAL_LENGTH ? 0 : prev + 1));
        }, 8000);

        console.log(count);
        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return (
        <CarouselContainer>
            <CarouselImageList count={count}>
                {IMG.map((img, i) => (
                    <CarouselImage background={img} key={i}></CarouselImage>
                ))}
            </CarouselImageList>
        </CarouselContainer>
    );
};

export default MainCarousel;
