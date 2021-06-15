import styled from 'styled-components/native';
import {
    colorLabel,
    colorPrimary,
    grey3,
    robotoBold,
    robotoLight,
    robotoMedium,
    robotoRegular,
    robotoThin,
} from '../styles/global-styles';
import React from 'react';
import {TextProps} from 'react-native';

const sizes = {
    title: 24,
    common: 15,
};

export const PageTitle = styled.Text`
    font-family: ${robotoMedium};
    color: ${colorLabel};
    font-size: ${sizes.title}px;
`;

export const CommonText = styled.Text`
    font-family: ${robotoRegular};
    color: ${grey3};
    font-size: ${sizes.common}px;
    line-height: ${sizes.common * 1.5}px;
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
    return (
        // @ts-ignore
        <CommonText onPress={props.onPress} style={{...props.style, fontSize}}>
            {props.text}{' '}
            <CommonText
                style={{
                    color: props.color ?? colorPrimary,
                    fontSize,
                    fontWeight: '700',
                }}>
                {props.textColored}
            </CommonText>
        </CommonText>
    );
};
