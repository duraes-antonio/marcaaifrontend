import React, {useState} from 'react';
import {actionsAuth} from '../../shared/store/modules/auth/actions';
import {RouteName} from '../../shared/routes/routes';
import RegisterVector from '../../../assets/vectors/register.svg';
import {styles, Text, TextSignUp, TextSignUpColor} from '../login/styles';
import RoundedForm from '../../shared/components/rounded-form';
import {SocialLoginButtons} from '../../shared/components/social-buttons';
import InputEmail from '../../shared/components/input/input-email';
import InputPassword from '../../shared/components/input/input-password';
import ButtonContained from '../../shared/components/button';
import {LoginScreenProps} from '../login/login';
import {useDispatch} from 'react-redux';

const Signup = ({navigation}: LoginScreenProps) => {
    const dispatch = useDispatch();
    const [form, setForm] = useState({email: '', password: ''});
    const [formFields, setFormFields] = useState({
        email: false,
        password: false,
        confirm: false,
    });
    const [loading, setLoading] = useState(false);

    const signUp = () => {
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
        setFormFields({...formFields, password: true});
    };
    const onInvalidPasswordInput = () => {
        setFormFields({...formFields, password: false});
    };

    const checkConfirmPassword = (confirmPassword: string) => {
        if (confirmPassword !== form.password) {
            return 'A confirmação deve ser igual à senha';
        }
    };
    const onConfirmPasswordInput = (valid: boolean) => {
        setFormFields({...formFields, confirm: valid});
    };

    const onValidEmailInput = (email: string) => {
        setForm({...form, email});
        setFormFields({...formFields, email: true});
    };
    const onInvalidEmailInput = () =>
        setFormFields({...formFields, email: false});

    const login = () => navigation.pop();

    const svg = <RegisterVector height={120} style={styles.vectorRegister} />;
    return (
        <RoundedForm title={'Crie uma conta'} svg={svg}>
            <SocialLoginButtons />
            <Text>Ou digite suas informações</Text>
            <InputEmail
                onInputValid={onValidEmailInput}
                onInputInvalid={onInvalidEmailInput}
            />
            <InputPassword
                onInputValid={onValidPasswordInput}
                onInputInvalid={() => onInvalidPasswordInput()}
                style={{marginTop: 5}}
            />
            <InputPassword
                checkError={checkConfirmPassword}
                onInputValid={() => onConfirmPasswordInput(true)}
                onInputInvalid={() => onConfirmPasswordInput(false)}
                label={'Confirmação de senha'}
                style={{marginTop: 5}}
            />
            <ButtonContained
                loading={loading}
                disabled={
                    !formFields.email ||
                    !formFields.password ||
                    !formFields.confirm ||
                    loading
                }
                text={'Finalizar registro'}
                onPress={signUp}
                style={{marginTop: 15}}
            />
            <TextSignUp onPress={login}>
                Já tem uma conta? <TextSignUpColor>Faça login</TextSignUpColor>
            </TextSignUp>
        </RoundedForm>
    );
};

export default Signup;
