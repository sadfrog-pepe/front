import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Arrow, { ArrowType } from '../atoms/arrow/Arrow';
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

const CarouselBtns = styled.div`
    position: absolute;
    width: 100%;
    z-index: 1000;
    display: flex;
    justify-content: center;
    bottom: 1rem;

    /* 현재 보여지는 image에 해당하는 버튼 색 바꾸기 위해 작성 : 현재 적용안됨 */
    &:nth-child(${(props) => props.count + 1}) {
        background-color: gray;
    }
`;

const MainCarousel = () => {
    const IMG = ['images/1.png', 'images/2.png', 'images/3.png']; // dummy data
    const TOTAL_LENGTH = IMG.length - 1;

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount((prev) => (prev === TOTAL_LENGTH ? 0 : prev + 1));
        }, 8000);

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

    const changeCount = (num) => {
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
                        count={count}
                        style={{ backgroundColor: 'black', color: 'white' }}
                    >
                        {i + 1}
                    </button>
                ))}
            </CarouselBtns>
        </CarouselContainer>
    );
};

export default MainCarousel;
