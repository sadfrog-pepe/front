import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LOGO_URL } from '../../../constant';

interface LogoProps {
  width?: string;
  height?: string;
}

export const StyledLogo = styled.div`
  width: ${(props: LogoProps) => props.width || '200px'};
  height: ${(props: LogoProps) => props.height || '100px'};
  background-image: url(${LOGO_URL});
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  &:hover {
    cursor: pointer;
  }
`;

const Logo = (props: LogoProps) => {
  return (
    <StyledLogo {...props}>
      <Link to="/">home</Link>
    </StyledLogo>
  );
};

export default Logo;
