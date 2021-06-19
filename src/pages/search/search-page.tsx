import React from 'react';
import {Container, ScreenContainer} from '../auth/password-recover/styles';
import {PageTitle} from '../../shared/components/texts';
import styled from 'styled-components/native';
import {colorInputForm} from '../../shared/styles/global-styles';

const texts = {
    pageTitle: 'Busque por um serviço ou estabelecimento',
};

export const SearchBar = styled.TextInput`
    background-color: ${colorInputForm};
    border-radius: 10px;
    padding: 12px 15px;
`;

const SearchPage = () => {
    return (
        <ScreenContainer>
            <Container>
                <PageTitle>{texts.pageTitle}</PageTitle>
            </Container>
        </ScreenContainer>
    );
};

export default SearchPage;
