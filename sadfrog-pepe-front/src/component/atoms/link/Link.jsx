import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Link.module.css';
import classnames from 'classnames';

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
