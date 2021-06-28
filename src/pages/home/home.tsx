import React from 'react';
import {CommonText, PageTitle} from '../../shared/components/general/texts';
import Appointments from '../../shared/components/appointments/appointment-list';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import reduxSelectors from '../../shared/store/root-selector';
import {UserState} from '../../shared/store/modules/user/reducers';
import Page from '../../shared/components/general/page/page';
import {PageHead} from '../../shared/components/general/page/styles';

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
        <PageHead>
            <PageTitle>{pageTitle}</PageTitle>
            <CommonText style={styles.pageDesc}>{texts.pageDesc}</CommonText>
        </PageHead>
    );
    const Body = <Appointments header={Header} />;
    return <Page body={Body} />;
};

export default Home;
