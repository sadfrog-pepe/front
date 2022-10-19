import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DEFAULT_BUTTON } from '../../constant';

const Button = ({ children = DEFAULT_BUTTON }) => {
    return <button type="button">{children}</button>;
};

// 아이콘용 component
const ButtonIcon = ({ icon }) => {
    return (
        <button type="button">
            <FontAwesomeIcon icon={icon} />
        </button>
    );
};

Button.icon = ButtonIcon;

export default Button;
