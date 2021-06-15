import React from 'react';
import {CommonText, PageTitle} from '../../shared/components/texts';
import Appointments from '../../shared/components/appointments/appointments';
import {Container, ScreenContainer} from '../auth/password-recover/styles';
import {StyleSheet, View} from 'react-native';

const texts = {
    pageDesc:
        'Listamos abaixo seus agendamentos atuais para que não os esqueça :)',
};

const styles = StyleSheet.create({
    pageDesc: {
        marginTop: 10,
    },
    appointmentsContainer: {
        marginTop: 20,
        height: 'auto',
        paddingLeft: 12,
        paddingRight: 12,
    },
});

const Home = (): JSX.Element => {
    return (
        <ScreenContainer>
            <Container>
                {/*TODO: Pegar nome do usuário*/}
                <PageTitle>Olá, Marilene</PageTitle>
                <CommonText style={styles.pageDesc}>
                    {texts.pageDesc}
                </CommonText>
            </Container>

            <View style={styles.appointmentsContainer}>
                <Appointments />
            </View>
        </ScreenContainer>
    );
};

export default Home;
