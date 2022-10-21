import styled from 'styled-components';
import { LOGO_URL } from '../../../constant';

interface LogoProps {
    width: string;
    height: string;
}

export const Logo = styled.div`
    width: ${(props: LogoProps) => props.width || '200px'};
    height: ${(props: LogoProps) => props.height || '100px'};
    background-image: url(${LOGO_URL});
    background-repeat: no-repeat;
    background-size: contain;
`;
