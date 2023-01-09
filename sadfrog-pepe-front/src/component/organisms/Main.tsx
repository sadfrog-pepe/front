import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getProducts, ProducutState } from '../../modules/reducers/product';
import { useAppDispatch } from '../../modules/store/store';

const MainContainer = styled.main`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const MainSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const Card = styled.div<{ background: string }>`
  position: relative;
  height: 300px;
  background-image: url(${(props) => props.background});
  background-size: cover;
  background-repeat: no-repeat;
  border: 1px solid red;

  & h5 {
    position: absolute;
    bottom: 5px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
  }
`;

const Main = () => {
  const [products, setProducts] = useState<ProducutState[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProducts()).then((res) => {
      setProducts(res.payload);
    });
  }, []);

  return (
    <MainContainer>
      <h2>상품</h2>
      <MainSection>
        {products.map((e, i) => (
          <>
            <Card key={i} background={e.image}>
              <h5>{e.name}</h5>
            </Card>
          </>
        ))}
      </MainSection>
    </MainContainer>
  );
};

export default Main;
