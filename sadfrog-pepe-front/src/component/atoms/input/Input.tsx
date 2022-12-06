import React from 'react';
import classNames from 'classnames';
import styles from './Input.module.css';
import styled from "styled-components"

interface InputProps {
    type: React.HTMLInputTypeAttribute;
    value: string;
    className: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const StyledCheckbox = styled.input`
    display: flex;
    column-gap: 1rem;
`

const Input = <T extends Partial<InputProps>>(props: T) => {
    const { type, value, className, placeholder, onChange } = props;
    const classProps = classNames(styles.input, className);

    if(type === 'checkbox') {
        return (
            <StyledCheckbox type={type}></StyledCheckbox>
        )
    }
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
