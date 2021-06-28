import React from 'react';
import {Button} from 'react-native-paper';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colorPrimary, ralewaySemiBold} from '../../styles/global-styles';
import styled from 'styled-components/native';

export interface ButtonProps {
    text: string;
    color?: string;
    uppercase?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
}

const _styles = StyleSheet.create({
    button: {
        height: 45,
        borderRadius: 25,
    },
    container: {
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ButtonText = styled.Text`
    font-family: ${ralewaySemiBold};
    font-weight: 600;
`;

const ButtonContained = (props: ButtonProps) => {
    const {color, disabled, loading, onPress, text, style, uppercase} = {
        ...props,
        color: props.color || colorPrimary,
        disabled: props.disabled || false,
        uppercase: props.uppercase || false,
    } as ButtonProps;
    const finalStyle = {...(style as StyleProp<any>), ..._styles.button};
    return (
        <Button
            loading={loading}
            mode="contained"
            uppercase={uppercase}
            color={color}
            disabled={disabled || loading}
            style={finalStyle}
            contentStyle={_styles.container}
            onPress={onPress}>
            <ButtonText>{text}</ButtonText>
        </Button>
    );
};

export default ButtonContained;
