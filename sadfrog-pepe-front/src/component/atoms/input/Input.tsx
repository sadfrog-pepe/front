import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

export enum InputType {
    TEXT = 'text',
    PASSWORD = 'password',
    SUBMIT = 'submit',
    RADIO = 'radio',
    BUTTON = 'button',
}

export enum InputDefaultValue {
    ID = '아이디',
    PASSWORD = '비밀번호',
}

interface InputProps {
    type: InputType;
    value: string;
    className?: string;
    placeholder?: string;
}

const Input = <T extends InputProps>(props: T) => {
    const { type, value, className, placeholder } = props;
    const classProps = classNames(styles.input, className);
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classProps}
            value={value}
        ></input>
    );
};

export default Input;
