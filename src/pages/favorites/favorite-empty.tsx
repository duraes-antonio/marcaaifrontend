import React from 'react';
import styled from 'styled-components/native';
import FavoriteEmptySvg from '../../../assets/vectors/empty_favorites.svg';
import {CommonText, PageSubtitle} from '../../shared/components/general/texts';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    svg: {
        marginBottom: 40,
    },
    subtitle: {
        alignSelf: 'flex-end',
    },
    pageHint: {
        marginTop: 15,
    },
});

const Container = styled.View`
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 40px;
`;

const texts = {
    subtitle: 'Ops!',
    pageHint:
        'Você ainda não adicionou um estabelecimento à sua lista de favoritos.\n\n' +
        'Favorite para não perder de vista quem cuida de você com carinho :)',
};

const FavoriteEmpty = () => {
    return (
        <Container>
            <FavoriteEmptySvg height={150} style={styles.svg} />
            <PageSubtitle>{texts.subtitle}</PageSubtitle>
            <CommonText style={styles.pageHint}>{texts.pageHint}</CommonText>
        </Container>
    );
};

export default FavoriteEmpty;
