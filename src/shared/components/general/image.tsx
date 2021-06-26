import React from 'react';
import {ImageProps} from 'react-native';
import styled from 'styled-components/native';

export type ImageCustomProps = {
    height?: number;
    width?: number;
    circle?: boolean;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    uri: string;
};

const _Image = styled.Image`
    width: ${props => props.width ?? props.height}px;
    height: ${props => props.height ?? props.width}px;
`;

export const CustomImage = (
    props: ImageCustomProps & ImageProps,
): JSX.Element => {
    const {height, uri, borderWidth, borderRadius, borderColor, circle, width} =
        props;
    const finalBorderRadius = (circle ? width || height : borderRadius) ?? 0;
    const _style = props.style;
    return (
        <_Image
            width={width}
            height={height}
            borderRadius={finalBorderRadius}
            source={{uri: uri}}
            style={{...(_style ?? {}), borderWidth, borderColor}}
        />
    );
};
