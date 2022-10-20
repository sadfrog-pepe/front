import React from 'react';
import styled from 'styled-components';
import LinkComponent, {
    LinkSize,
    LinkTheme,
    StyledLink,
} from '../atoms/link/Link';

const MainLinkList = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width: 800px;
    height: 50px;
    justify-content: space-around;
    align-items: center;
`;

const LinkList = () => {
    return (
        <MainLinkList>
            <LinkComponent
                to={'/brand'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [브랜드]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
                color="gold"
            >
                [프리미엄]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [SET]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [미사용품]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [신상품]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [아우터]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [상의]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [팬츠]
            </LinkComponent>
            <LinkComponent
                to={'/##'}
                size={LinkSize.MEDIUM}
                theme={LinkTheme.DEFAULT}
            >
                [For woman]
            </LinkComponent>
            <StyledLink small>[For man]</StyledLink>
        </MainLinkList>
    );
};

export default LinkList;
