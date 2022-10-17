import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkComponent = ({ to, children }) => {
    return (
        <Link to={to} style={{ textDecoration: 'none', color: 'black' }}>
            {children}
        </Link>
    );
};

export default LinkComponent;
