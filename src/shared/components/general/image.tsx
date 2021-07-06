import React from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';

export type ImageCustomProps = {
    height?: number;
    width?: number;
    circle?: boolean;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    uri: string;
};

export const CustomImage = (
    props: ImageCustomProps & Omit<ImageProps, 'source'>,
): JSX.Element => {
    const {height, uri, borderWidth, borderRadius, borderColor, circle, width} =
        props;
    const styles = StyleSheet.create({
        image: {
            width: width ?? height,
            height: height ?? width,
            borderRadius: (circle ? width ?? height : borderRadius) ?? 0,
            borderColor: borderColor,
            borderWidth: borderWidth,
        },
    });
    return <Image source={{uri}} style={[props.style, styles.image]} />;
};
