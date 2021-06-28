import {HelperText, TextInput as TextInputPaper} from 'react-native-paper';
import {colorPrimary, colorRed, grey4} from '../../styles/global-styles';
import React, {useRef, useState} from 'react';
import {StyleProp, TextInput, TextStyle, View} from 'react-native';

export const themeColor: Partial<ReactNativePaper.ThemeColors> = {
    primary: colorPrimary,
    placeholder: grey4,
    error: colorRed,
};

export const theme: Partial<ReactNativePaper.Theme> = {
    roundness: 18,
};

export interface InputTextProps {
    initialValue?: string;
    setValue: (v: string) => void;
    checkError?: (v: string) => string | null | undefined;
    onInputValid?: (v: string) => void;
    onInputInvalid?: (v: string) => void;
    label: string;
    placeholder?: string;
    sensibleData?: boolean;
    error?: boolean;
    disabled?: boolean;
    left?: React.ReactNode;
    right?: React.ReactNode;
    style?: StyleProp<TextStyle>;
}

export const InputText = (props: InputTextProps) => {
    const [error, setError] = useState('');
    const inputRef = useRef<TextInput>(null);

    const validateValue = (t: string): void => {
        const errorMessage = props.checkError && props.checkError(t);
        setError(errorMessage ?? '');

        if (errorMessage) {
            return props.onInputInvalid && props.onInputInvalid(t);
        }

        return props.onInputValid && props.onInputValid(t);
    };

    const changeValueCallback = (t: string): void => {
        props.setValue(t);
        validateValue(t);
    };

    return (
        <View style={props.style}>
            <TextInputPaper
                ref={inputRef}
                disabled={props.disabled}
                error={!!error}
                mode={'outlined'}
                label={props.label}
                value={props.initialValue}
                onChangeText={changeValueCallback}
                theme={{...theme, colors: themeColor}}
                secureTextEntry={props.sensibleData}
                left={props.left}
                right={props.right}
                placeholder={props.placeholder}
            />
            {props.checkError && (
                <HelperText
                    theme={{colors: themeColor}}
                    type="error"
                    visible={!!error}>
                    {error}
                </HelperText>
            )}
        </View>
    );
};
