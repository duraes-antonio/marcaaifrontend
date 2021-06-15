import React, {useState} from 'react';
import LoginVector from '../../../assets/vectors/login.svg';
import ButtonContained from '../../shared/components/button';
import {SocialLoginButtons} from '../../shared/components/social-buttons';
import InputEmail from '../../shared/components/input/input-email';
import InputPassword from '../../shared/components/input/input-password';
import RoundedForm from '../../shared/components/rounded-form';
import {useDispatch} from 'react-redux';
import {StackActions} from '@react-navigation/native';
import {styles, svgHeihgt, Text, TextForgotPassword} from './styles';
import {RouteName} from '../../shared/routes/routes';
import {actionsAuth} from '../../shared/store/modules/auth/actions';
import {ActionTextBicolor} from '../../shared/components/texts';

export interface LoginScreenProps {
    navigation: typeof StackActions;
}

const Login = ({navigation}: LoginScreenProps) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({email: '', password: ''});
    const [loading, setLoading] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [validPassword, setValidPassword] = useState(false);

    const signIn = () => {
        setLoading(true);
        const credentials = {
            password: form.password,
            username: form.email,
        };
        dispatch(actionsAuth.loginRequest(credentials));
        setLoading(false);
        navigation.replace(RouteName.HOME);
    };

    const onValidPasswordInput = (password: string) => {
        setForm({...form, password});
        setValidPassword(true);
    };

    const onValidEmailInput = (email: string) => {
        setForm({...form, email});
        setValidEmail(true);
    };
    const onInvalidEmailInput = () => setValidEmail(false);

    const signUp = () => navigation.push(RouteName.REGISTER);
    const recoverPass = () => navigation.push(RouteName.PASSWORD_RECOVER);

    const svg = <LoginVector height={svgHeihgt} style={styles.vectorLogin} />;
    return (
        <RoundedForm title={'Faça login para continuar'} svg={svg}>
            <SocialLoginButtons />
            <Text>Ou entre com email e senha</Text>
            <InputEmail
                onInputValid={onValidEmailInput}
                onInputInvalid={onInvalidEmailInput}
            />
            <InputPassword
                onInputValid={onValidPasswordInput}
                onInputInvalid={() => setValidPassword(false)}
                style={{marginTop: 10}}
            />
            <TextForgotPassword onPress={recoverPass}>
                Esqueci minha senha
            </TextForgotPassword>
            <ButtonContained
                loading={loading}
                disabled={!validEmail || !validPassword || loading}
                text={'Entrar'}
                onPress={signIn}
                style={{maxHeight: 50, display: 'flex'}}
            />
            <ActionTextBicolor
                onPress={signUp}
                text={'Ainda não tem uma conta?'}
                textColored={'Registre-se'}
                style={{alignSelf: 'center', paddingTop: 5, marginTop: 10}}
            />
        </RoundedForm>
    );
};

export default Login;
