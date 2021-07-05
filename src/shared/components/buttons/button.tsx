import React, {memo} from 'react';
import {Button} from 'react-native-paper';
import {StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {colorPrimary, robotoMedium} from '../../styles/global-styles';
import {IconSource} from 'react-native-paper/lib/typescript/components/Icon';

export interface ButtonProps {
    text: string;
    color?: string;
    uppercase?: boolean;
    loading?: boolean;
    disabled?: boolean;
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
    icon?: IconSource;
}

const styles = StyleSheet.create({
    general: {
        height: 45,
        borderRadius: 25,
    },
    container: {
        height: '100%',
        paddingHorizontal: 10,
    },
    label: {
        fontFamily: robotoMedium,
        fontWeight: '600',
        fontSize: 16,
        letterSpacing: 0,
    },
});

export function ButtonContained(props: ButtonProps): JSX.Element {
    const {color, disabled, loading, onPress, text, style, uppercase} = {
        ...props,
        color: props.color || colorPrimary,
        disabled: props.disabled || false,
        uppercase: props.uppercase || false,
    } as ButtonProps;
    return (
        <Button
            icon={props.icon}
            loading={loading}
            mode="contained"
            uppercase={uppercase}
            color={color}
            disabled={disabled || loading}
            onPress={onPress}
            contentStyle={styles.container}
            labelStyle={styles.label}
            style={[styles.general, style]}>
            {text}
        </Button>
    );
}

export default memo(ButtonContained);
