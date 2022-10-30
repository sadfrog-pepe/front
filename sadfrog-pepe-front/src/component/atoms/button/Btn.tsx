import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';

type btnType = 'button' | 'submit' | 'reset' | undefined;

export interface BtnProps {
    type: btnType;
    children: string;
    bgColor: string;
    color: string;
    width: string;
    disabled: boolean;
}

const backgroundColor = () => prop('bgColor', 'transparent');
const textColor = () => prop('color', 'black');
const width = () => prop('width', '100px');

const defaultStyle = css`
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    text-decoration: none;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 0.125rem;
    margin: 1rem 0;
    background-color: ${backgroundColor};
    color: ${textColor};
    width: ${width};
    cursor: ${ifProp(
        'disabled',
        'default',
        'pointer'
    )}; // disabled가 있다면, default를 없다면, pointer를 반환
    pointer-events: ${ifProp('disabled', 'none', 'auto')};
`;

const StyledBtn = styled.button`
    ${defaultStyle}
`;

const Btn = <T extends Partial<BtnProps>>({ type, children, ...props }: T) => {
    return <StyledBtn {...props}>{children}</StyledBtn>;
};

export default Btn;
