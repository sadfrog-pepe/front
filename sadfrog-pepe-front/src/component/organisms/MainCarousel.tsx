import React, { useEffect, useState, useRef } from 'react';

import styled from 'styled-components';
import ArrowList from '../moecules/ArrowList';

const CarouselContainer = styled.div`
    position: relative;
    width: 100%;
    height: 400px;
    overflow-x: hidden;

    /* 스크롤바 숨기기 */
    &::-webkit-scrollbar {
        display: none;
    }
`;

export interface ImageListProps {
    count: number;
}

const CarouselImageList = styled.div`
    width: 100%;
    display: flex;
    transition: ${(props: ImageListProps) =>
        !props.count ? '0s' : 'all 1s ease 0s'};
    transform: ${(props: ImageListProps) =>
        'translateX(-' + props.count * 100 + '%)'};
`;

export interface ImageProps {
    background: string;
}

const CarouselImage = styled.div`
    width: 100%;
    height: 400px;
    background-image: url(${(props: ImageProps) => props.background});
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: contain;
    flex: none;
`;

export interface btnProps {
    count: number;
}
const CarouselBtns = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    bottom: 1rem;
`;

const MainCarousel = () => {
    const IMG = [
        'images/1.png',
        'images/2.png',
        'images/3.png',
        'images/1.png',
    ]; // dummy data
    const TOTAL_LENGTH = IMG.length - 1;

    const [count, setCount] = useState(0);
    const lastImg = useRef(false);

    useEffect(() => {
        const timer = setInterval(
            () => {
                if (count < TOTAL_LENGTH) {
                    lastImg.current = false;
                    setCount((prev) => prev + 1);
                } else {
                    lastImg.current = true;
                    setCount(0);
                }
            },
            lastImg.current ? 0 : 4000
        );
        return () => {
            clearInterval(timer);
        };
    }, [count]);

    const nextImage = (): void => {
        setCount((prev) => (prev === TOTAL_LENGTH ? 0 : prev + 1));
    };

    const prevImage = (): void => {
        setCount((prev) => (prev === 0 ? TOTAL_LENGTH : prev - 1));
    };

    const changeCount = (num: number): void => {
        setCount(num);
    };

    return (
        <CarouselContainer>
            <CarouselImageList count={count}>
                {IMG.map((img, i) => (
                    <CarouselImage background={img} key={i}></CarouselImage>
                ))}
            </CarouselImageList>

            <ArrowList next={() => nextImage()} prev={() => prevImage()} />

            <CarouselBtns>
                {IMG.map((img, i) => (
                    <button
                        key={i}
                        onClick={() => changeCount(i)}
                        style={{ backgroundColor: 'black', color: 'white' }}
                    >
                        {i < TOTAL_LENGTH ? i + 1 : null}
                    </button>
                ))}
            </CarouselBtns>
        </CarouselContainer>
    );
};

export default MainCarousel;
