import { createGlobalStyle } from 'styled-components';
import Nomalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
    ${Nomalize};
    * {
        margin : 0;
        padding : 0;
    }

`;

export default GlobalStyle;
