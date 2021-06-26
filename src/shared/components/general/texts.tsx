import styled from 'styled-components/native';
import {
    colorLabel,
    colorPrimary,
    grey3,
    robotoMedium,
    robotoRegular,
} from '../../styles/global-styles';
import React from 'react';
import {StyleSheet, TextProps} from 'react-native';

const sizes = {
    title: 24,
    subtitle: 22,
    common: 15,
};

export const PageTitle = styled.Text`
    font-family: ${robotoMedium};
    color: ${colorLabel};
    font-size: ${sizes.title}px;
`;

export const PageSubtitle = styled(PageTitle)`
    font-size: ${sizes.title}px;
`;

export const CommonText = styled.Text`
    font-family: ${robotoRegular};
    color: ${grey3};
    font-size: ${sizes.common}px;
    line-height: ${sizes.common * 1.5}px;
`;

export const SemiBoldText = styled(CommonText)`
    font-family: ${robotoMedium};
`;

export const ActionTextBicolor = (
    props: {
        text: string;
        textColored: string;
        color?: string;
        fontSize?: number;
    } & TextProps,
) => {
    const fontSize = props.fontSize ?? 14;
    const _styles = StyleSheet.create({
        textColored: {
            color: props.color ?? colorPrimary,
            fontSize,
            fontWeight: '700',
        },
    });
    return (
        // @ts-ignore
        <CommonText onPress={props.onPress} style={{...props.style, fontSize}}>
            {props.text}{' '}
            <CommonText style={_styles.textColored}>
                {props.textColored}
            </CommonText>
        </CommonText>
    );
};
