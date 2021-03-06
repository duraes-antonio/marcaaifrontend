import React from 'react';
import {ContainerScrollable, Page} from '../password-recover/styles';
import {CommonText, PageTitle} from '../../../shared/components/general/texts';
import {StyleSheet} from 'react-native';
import EmailConfirmedSvg from '../../../../assets/vectors/email_confirmed.svg';

const texts = {
    title: 'Vamos lá!',
    description:
        'Enivamos um link para sua caixa de email, por favor, abra-o pelo seu smartphone para redefinir sua senha.',
};

const styles = StyleSheet.create({
    description: {
        fontSize: 16,
        marginTop: 20,
    },
    emailSvg: {
        marginTop: 70,
        alignSelf: 'center',
    },
});

const ForgotPassEmailConfirmed = () => {
    return (
        // TODO: Centralizar estilos
        <Page>
            <ContainerScrollable>
                <PageTitle>{texts.title}</PageTitle>
                <CommonText style={styles.description}>
                    {texts.description}
                </CommonText>
                <EmailConfirmedSvg height={140} style={styles.emailSvg} />
            </ContainerScrollable>
        </Page>
    );
};

export default ForgotPassEmailConfirmed;
