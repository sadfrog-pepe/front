import React from 'react';
import styled, { css } from 'styled-components';

const DetailMenuContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.7);

    display: ${(props) => (props.isShow ? 'block' : 'none')};
`;

const DetailMenuContents = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 350px;
    height: 100vh;
    background-color: rgba(255, 255, 255, 0.6);
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.1);

    @keyframes showUp {
        0% {
            transform: translate(-100%, 0);
        }

        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes showOut {
        0% {
            transform: translate(0, 0);
        }

        100% {
            transform: translate(-100%, 0);
        }
    }

    ${(props) =>
        props.isShow &&
        css`
            animation: 0.7s ${(props) => (props.isShow ? 'showUp' : 'showOut')}
                forwards;
        `}
`;

const DetailMenuCloseButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: -2rem;
    top: 0.5rem;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: white;
    font-size: 1.5rem;

    animation: 1.25s btnShowUp;
    animation: 1.5s btnOpacity;

    @keyframes btnShowUp {
        0% {
            transform: translate(-250%, 0);
        }

        100% {
            transform: translate(0, 0);
        }
    }

    @keyframes btnOpacity {
        0% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
`;

const DetailMenu = ({ isShow, hideDetailMenu }) => {
    return (
        <DetailMenuContainer isShow={isShow}>
            <DetailMenuContents isShow={isShow}>
                디테일한 메뉴
                <DetailMenuCloseButton
                    type="button"
                    onClick={() => hideDetailMenu()}
                >
                    x
                </DetailMenuCloseButton>
            </DetailMenuContents>
        </DetailMenuContainer>
    );
};

export default DetailMenu;
