import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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

const RightArrow = styled.button`
    position: absolute;
    right: 0;
    top: 0;
    width: 80px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    font-size: 2rem;
    transition: all 0.5s linear 0s;

    &:hover {
        font-size: 3rem;
    }
`;
const LeftArrow = styled(RightArrow)`
    left: 0;
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

    const nextImage = () => {
        setCount((prev) => (prev === TOTAL_LENGTH ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCount((prev) => (prev === 0 ? TOTAL_LENGTH : prev - 1));
    };

    return (
        <div>
            <CarouselContainer>
                <CarouselImageList count={count}>
                    {IMG.map((img, i) => (
                        <CarouselImage background={img} key={i}></CarouselImage>
                    ))}
                </CarouselImageList>
                <LeftArrow type="button" onClick={() => prevImage()}>
                    {'<'}
                </LeftArrow>
                <RightArrow type="button" onClick={() => nextImage()}>
                    {'>'}
                </RightArrow>
            </CarouselContainer>
        </div>
    );
};

export default MainCarousel;
