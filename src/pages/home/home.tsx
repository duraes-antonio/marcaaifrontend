import React from 'react';
import {CommonText, PageTitle} from '../../shared/components/general/texts';
import Appointments from '../../shared/components/appointments/appointments';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import reduxSelectors from '../../shared/store/root-selector';
import {UserState} from '../../shared/store/modules/user/reducers';
import Page from '../../shared/components/general/page/page';

const texts = {
    pageDesc:
        'Listamos abaixo seus agendamentos atuais para que não os esqueça :)',
};

const styles = StyleSheet.create({
    pageDesc: {
        marginTop: 10,
    },
});

const Home = (): JSX.Element => {
    const user: UserState = useSelector(reduxSelectors.user);
    const userFirstName = user?.name ? user.name.split(' ')[0] : '';
    const pageTitle = `Olá, ${userFirstName}`;
    const Header = (
        <>
            <PageTitle>{pageTitle}</PageTitle>
            <CommonText style={styles.pageDesc}>{texts.pageDesc}</CommonText>
        </>
    );
    return (
        <Page
            body={<Appointments />}
            header={Header}
            bodyScrollable
            applyPaddingBody
            applyPaddingHeaderHeight
        />
    );
};

export default Home;
