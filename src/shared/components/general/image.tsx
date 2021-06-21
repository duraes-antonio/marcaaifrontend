import React from 'react';
import styled from 'styled-components/native';

const _Image = styled.Image`
    height: ${props => props.height};
    width: ${props => props.width};
`;

export type ImageProps = {
    height?: number;
    width?: number;
    circle?: boolean;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    uri: string;
};

export const Image = (props: ImageProps): JSX.Element => {
    const {height, uri, borderWidth, borderRadius, borderColor, circle, width} =
        props;
    const finalBorderRadius = (circle ? width || height : borderRadius) ?? 0;
    return (
        <_Image
            width={width}
            height={height}
            borderRadius={finalBorderRadius}
            source={{uri: uri}}
            style={{borderWidth, borderColor}}
        />
    );
};
