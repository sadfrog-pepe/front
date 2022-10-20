import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.css';

// 버튼 타입
export const ButtonType = {
    BUTTON: 'button',
    SUBMIT: 'submit',
    ICON: 'icon',
};

// 버튼 테마
export const ButtonTheme = {
    DEFAULT: 'default',
    ROUNDED: 'rounded',
};

// 버튼 사이즈
export const ButtonSize = {
    SMALL: 'small',
    MEDIUM: 'medium',
    LARGE: 'large',
};

const Button = (props) => {
    const { type, onClick, children, theme, size, className, disabled } = props;

    const classProps = classnames(
        styles.button,
        styles[theme],
        styles[size],
        className
    );
    return (
        <button type={type} onClick={onClick} className={classProps}>
            {children}
        </button>
    );
};

export default Button;
