import React from 'react';
import { Link } from 'react-router-dom';
import { DEFAULT_COLOR } from '../../constant';
const LinkComponent = ({ to, children, color = DEFAULT_COLOR }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: `${color}` }}>
            {children}
        </Link>
    );
};

export default LinkComponent;
