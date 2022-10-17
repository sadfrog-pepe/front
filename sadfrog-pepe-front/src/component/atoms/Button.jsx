import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = ({ children = '*' }) => {
    return <button>{children}</button>;
};

const ButtonIcon = ({ icon }) => {
    return <FontAwesomeIcon icon={icon} />;
};

Button.icon = ButtonIcon;

export default Button;
