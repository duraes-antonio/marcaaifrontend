import React, {useState} from 'react';
import {InputText} from './input';
import {StyleProp, TextStyle} from 'react-native';
import {regexEmailValidation} from '../../constants/regex';

export interface InputEmailProps {
    initialValue?: string;
    label?: string;
    disabled?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    style?: StyleProp<TextStyle>;
    onInputValid: (email: string) => void;
    onInputInvalid: (email: string) => void;
}

const validateEmail = (email: string) =>
    email.match(regexEmailValidation)
        ? null
        : 'Ops! O email não está em um formato válido';

const InputEmail = (props: InputEmailProps) => {
    const {initialValue, disabled, label, left, right, style} = props;
    const [email, setEmail] = useState(initialValue || '');
    return (
        <InputText
            label={label || 'Email'}
            disabled={disabled}
            initialValue={email}
            setValue={setEmail}
            checkError={validateEmail}
            onInputValid={props.onInputValid}
            onInputInvalid={props.onInputInvalid}
            placeholder={'meuemail@email.com'}
            left={left}
            right={right}
            style={style}
        />
    );
};

export default InputEmail;
