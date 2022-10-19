import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkComponent = ({ to, children, color = 'black' }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: `${color}` }}>
            {children}
        </Link>
    );
};

export default LinkComponent;
