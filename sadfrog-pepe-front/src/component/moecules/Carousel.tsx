import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import ArrowList from './ArrowList';

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
    props.count === 0 ? '0s' : 'all 1s ease 0s'};
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
  background-size: cover;
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
  column-gap: 0.5rem;
  justify-content: center;
  bottom: 1rem;

  & button {
    border-radius: 50%;
    border: none;
    width: 1rem;
    height: 1rem;
    background-color: lightgray;
    font-size: 0.5rem;
    text-align: center;
  }

  & button:nth-child(${(props: { count: number }) => props.count + 1}) {
    background-color: gray;
  }
`;

const Carousel = () => {
  const IMG = ['images/1.png', 'images/2.png', 'images/3.png', 'images/1.png']; // dummy data
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

      <CarouselBtns count={count}>
        {IMG.map((img, idx) => {
          if (idx < TOTAL_LENGTH) {
            return <button key={idx} onClick={() => changeCount(idx)}></button>;
          }
        })}
      </CarouselBtns>
    </CarouselContainer>
  );
};

export default Carousel;
