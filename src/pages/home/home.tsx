import React from 'react';
import {CommonText, PageTitle} from '../../shared/components/general/texts';
import Appointments from '../../shared/components/appointments/appointments';
import {ContainerScrollable, Page} from '../auth/password-recover/styles';
import {ScrollView, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import reduxSelectors from '../../shared/store/root-selector';
import {UserState} from '../../shared/store/modules/user/reducers';

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
        marginBottom: 215,
    },
});

const Home = (): JSX.Element => {
    const user: UserState = useSelector(reduxSelectors.user);
    const userFirstName = user?.name ? user.name.split(' ')[0] : '';
    return (
        <Page>
            <ContainerScrollable>
                <PageTitle>Olá, {userFirstName}</PageTitle>
                <CommonText style={styles.pageDesc}>
                    {texts.pageDesc}
                </CommonText>
            </ContainerScrollable>

            <ScrollView style={styles.appointmentsContainer}>
                <Appointments />
            </ScrollView>
        </Page>
    );
};

export default Home;
