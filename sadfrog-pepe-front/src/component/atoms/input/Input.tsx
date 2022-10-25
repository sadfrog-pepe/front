import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

// type Inputput = Pick<React.HTMLInputTypeAttribute, 'text' | 'password'>;

export enum InputDefaultValue {
    ID = '아이디',
    PASSWORD = '비밀번호',
    PASSWORD_CHECK = '비밀번호 확인',
    PHONE = '전화번호',
    NAME = '이름',
}

interface InputProps {
    type: React.HTMLInputTypeAttribute;
    value: string;
    className: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = <T extends Partial<InputProps>>(props: T) => {
    const { type, value, className, placeholder, onChange } = props;
    const classProps = classNames(styles.input, className);
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={classProps}
            defaultValue={value}
            onChange={onChange}
        ></input>
    );
};

export default Input;
