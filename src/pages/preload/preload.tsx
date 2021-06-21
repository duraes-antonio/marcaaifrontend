import React from 'react';
import styled, {css} from 'styled-components/native';
import {Logo} from '../../shared/components/general/logo';
import {
    ralewayBold,
    ralewayItalic,
    ralewaySemiBold,
    stylesGlobal,
} from '../../shared/styles/global-styles';

const Container = styled.View`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const LogoMargin = styled.View`
    margin-bottom: 5px;
    padding-left: 3px;
`;

const titleBaseStyle = css`
    font-family: ${ralewaySemiBold};
    font-size: 20px;
    color: ${stylesGlobal.colorPrimary};
`;

const AppNameTitle = styled.Text`
    ${titleBaseStyle}
`;

const AppNameTitleBold = styled.Text`
    ${titleBaseStyle};
    font-family: ${ralewayBold};
`;

const AppNameSubtitle = styled.Text`
    ${titleBaseStyle};
    font-family: ${ralewayItalic};
    font-size: 16px;
`;

export const Preload = () => (
    <Container>
        <LogoMargin>
            <Logo />
        </LogoMargin>
        <AppNameTitle>
            marca <AppNameTitleBold>aí!</AppNameTitleBold>
        </AppNameTitle>
        <AppNameSubtitle>beleza</AppNameSubtitle>
    </Container>
);
