import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

// 버튼 타입
export enum ButtonType {
    BUTTON = 'button',
    SUBMIT = 'submit',
    RESET = 'reset',
}

// 버튼 테마
export enum ButtonTheme {
    DEFAULT = 'default',
    ROUNDED = 'rounded',
}

// 버튼 사이즈
export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

export type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type: ButtonType;
    children?: string;
    theme?: ButtonTheme;
    size?: ButtonSize;
    className?: string;
};
const Button = (props: ButtonProps) => {
    const { type, onClick, children, theme, size, className } = props;

    const classProps = classnames(
        styles.button,
        styles[theme ? theme : ''],
        styles[size ? size : ''],
        className
    );
    return (
        <button type={type} onClick={onClick} className={classProps}>
            {children}
        </button>
    );
};

export default Button;
