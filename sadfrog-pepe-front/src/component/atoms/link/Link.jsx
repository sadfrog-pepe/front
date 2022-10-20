import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';
import classnames from 'classnames';
import styled, { css } from 'styled-components';

export const LinkTheme = {
    DEFAULT: 'default',
};

export const LinkSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
};

const LinkComponent = (props) => {
    const { to, children, theme, size, color } = props;

    const classProps = classnames(
        styles.link,
        styles[theme],
        styles[size],
        styles[color]
    );

    return (
        <Link to={to} className={classProps}>
            {children}
        </Link>
    );
};

export default LinkComponent;

// atomic을 어떤 방식으로 적용할지에 대한 고민
// styled-component vs css
export const StyledLink = styled.a`
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    text-decoration: none;
    color: black;
    background-color: white;
    border: none;

    /* size */
    ${(props) =>
        props.large &&
        css`
            font-size: 1.2rem;
        `}

    ${(props) =>
        props.medium &&
        css`
            font-size: 0.9rem;
        `}

    ${(props) =>
        props.small &&
        css`
            font-size: 0.7rem;
            color: dodgerblue;
        `}
`;
