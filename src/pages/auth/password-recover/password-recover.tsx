import React, {useState} from 'react';
import {
    ActionTextBicolor,
    CommonText,
    PageTitle,
} from '../../../shared/components/general/texts';
import InputEmail from '../../../shared/components/input/input-email';
import ButtonContained from '../../../shared/components/buttons/button';
import ForgotPasswordSvg from '../../../../assets/vectors/forgot_password.svg';
import {ContainerScrollable, Page, styles, SvgContainer} from './styles';
import {LoginScreenProps} from '../../login/login';
import {RouteName} from '../../../shared/routes/routes';
import {services} from '../../../data/services/di';

const texts = {
    title: 'Tudo bem!',
    description:
        'Adicione seu email abaixo para ajudarmos a recuperar seu acesso',
    buttonConfirm: 'Confirmar email',
    inputLabel: 'Email para recuperação',
    login: 'Lembrou a senha?',
    loginAction: 'Faça login',
};

const PasswordRecover = ({navigation}: LoginScreenProps) => {
    const [emailConfirmation, setEmailConfirmation] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [loading, setLoading] = useState(false);

    const redirectToLogin = () => navigation.push(RouteName.LOGIN);

    const onEmailInput = (email: string, valid: boolean): void => {
        setValidEmail(valid);
        setEmailConfirmation(email);
    };

    const handleRecover = async () => {
        setLoading(true);
        await services.resetPassword.resetRequest(emailConfirmation);
        setLoading(false);
        navigation.replace(RouteName.PASSWORD_REDEFINITION);
    };

    return (
        // TODO: Centralizar estilos
        <Page>
            <ContainerScrollable>
                <PageTitle>{texts.title}</PageTitle>
                <CommonText style={styles.pageDesc}>
                    {texts.description}
                </CommonText>
                <InputEmail
                    label={texts.inputLabel}
                    onInputValid={email => onEmailInput(email, true)}
                    onInputInvalid={email => onEmailInput(email, false)}
                    style={styles.inputEmail}
                />
                <SvgContainer>
                    <ForgotPasswordSvg height={125} />
                    <ButtonContained
                        disabled={!validEmail}
                        loading={loading}
                        text={texts.buttonConfirm}
                        onPress={handleRecover}
                    />
                </SvgContainer>
            </ContainerScrollable>
            <ActionTextBicolor
                onPress={redirectToLogin}
                text={texts.login}
                textColored={texts.loginAction}
                style={styles.loginTextAction}
            />
        </Page>
    );
};

export default PasswordRecover;
