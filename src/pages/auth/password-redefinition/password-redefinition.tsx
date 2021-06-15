import React, {useState} from 'react';
import {Container, ScreenContainer} from '../password-recover/styles';
import {CommonText, PageTitle} from '../../../shared/components/texts';
import PasswordRedefinitionSvg from '../../../../assets/vectors/password_redefinition.svg';
import InputPassword from '../../../shared/components/input/input-password';
import {styles} from './styles';
import ButtonContained from '../../../shared/components/button';
import PasswordStrength from './password-strength';
import {PasswordSecurityLevel} from '../../../models/password-validator';

const texts = {
    button: 'Confirmar',
    description:
        'Adicione uma nova senha segura e confirme ela para ter seu acesso à plataforma',
    errorPasswordMatch: 'Ops! As senhas devem ser iguais',
    inputPass: 'Nova senha',
    inputPassConfirm: 'Confirmação da senha',
    title: 'Pronto',
};

const PasswordRedefinition = () => {
    const [form, setForm] = useState({
        password: '',
        confirm: '',
    });

    const [securePassword, setSecurePassword] = useState(false);

    const updateForm = (password: string, confirm: string) =>
        setForm({password, confirm});

    const checkPasswordConfirm = (confirmation: string) =>
        confirmation === form.password ? null : texts.errorPasswordMatch;

    const redefinitionHandler = () => null;
    return (
        <ScreenContainer>
            <Container>
                <PageTitle>{texts.title}</PageTitle>
                <CommonText style={styles.description}>
                    {texts.description}
                </CommonText>
                <PasswordRedefinitionSvg
                    height={150}
                    style={styles.redefinitionSvg}
                />
                <InputPassword
                    shoudCheckError={false}
                    label={texts.inputPass}
                    onInputValid={pass => updateForm(pass, form.confirm)}
                    onInputInvalid={pass => updateForm(pass, form.confirm)}
                    style={styles.inputPassword}
                />
                <PasswordStrength
                    securityLevel={level =>
                        setSecurePassword(level >= PasswordSecurityLevel.GOOD)
                    }
                    password={form.password}
                />
                <InputPassword
                    checkError={checkPasswordConfirm}
                    label={texts.inputPassConfirm}
                    onInputValid={confirm => updateForm(form.password, confirm)}
                    onInputInvalid={confirm =>
                        updateForm(form.password, confirm)
                    }
                    style={styles.inputPasswordConfirm}
                />
                <ButtonContained
                    disabled={!securePassword || form.confirm !== form.password}
                    text={texts.button}
                    onPress={redefinitionHandler}
                    style={styles.button}
                />
            </Container>
        </ScreenContainer>
    );
};

export default PasswordRedefinition;
