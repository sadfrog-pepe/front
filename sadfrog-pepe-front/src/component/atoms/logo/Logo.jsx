import styled from 'styled-components';
import { LOGO_URL } from '../../../constant';

export const Logo = styled.div`
    width: ${(props) => props.width || '200px'};
    height: ${(props) => props.height || '100px'};
    background-image: url(${LOGO_URL});
    background-repeat: no-repeat;
    background-size: contain;
`;
