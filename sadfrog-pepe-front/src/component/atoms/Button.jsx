import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children = '*' }) => {
    return <button type="button">{children}</button>;
};

const ButtonIcon = ({ icon }) => {
    return (
        <button type="button">
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

Button.icon = ButtonIcon;

export default Button;
