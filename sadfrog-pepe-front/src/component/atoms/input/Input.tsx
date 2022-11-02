import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';

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
