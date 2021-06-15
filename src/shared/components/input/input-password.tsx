import React, {useState} from 'react';
import {InputText} from './input';
import {StyleProp, TextStyle} from 'react-native';
import {TextInput} from 'react-native-paper';
import {grey4} from '../../styles/global-styles';

export interface InputPasswordProps {
    initialValue?: string;
    label?: string;
    style?: StyleProp<TextStyle>;
    checkError?: (v: string) => string | null | undefined;
    shoudCheckError?: boolean;
    onInputValid: (password: string) => void;
    onInputInvalid: (password: string) => void;
}

const validatePassword = (password: string, minLength = 8) =>
    password.length >= minLength
        ? null
        : `A senha deve ter no mínimo ${minLength} caracteres`;

const InputPassword = (props: InputPasswordProps) => {
    const {initialValue, label, style} = props;
    const [password, setPassword] = useState(initialValue || '');
    const [showPassword, setShowPassword] = useState(false);
    const functionCheck =
        props.checkError ??
        (props.shoudCheckError !== false ? validatePassword : undefined);
    return (
        <InputText
            label={label || 'Senha'}
            initialValue={password}
            checkError={functionCheck}
            setValue={setPassword}
            onInputValid={props.onInputValid}
            onInputInvalid={props.onInputInvalid}
            sensibleData={!showPassword}
            style={style}
            right={
                <TextInput.Icon
                    forceTextInputFocus={false}
                    onPress={() => setShowPassword(!showPassword)}
                    name={showPassword ? 'eye-off' : 'eye'}
                    color={grey4}
                />
            }
        />
    );
};

export default InputPassword;
