import React from 'react';
import {Image, ImageProps, StyleSheet} from 'react-native';
import EmptyImageSvg from '../../../../assets/vectors/empty_image.svg';
import {StringNullable} from '../../types/general';

export type ImageCustomProps = {
    height?: number;
    width?: number;
    circle?: boolean;
    borderRadius?: number;
    borderColor?: string;
    borderWidth?: number;
    uri?: StringNullable;
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
    return !props.uri ? (
        <EmptyImageSvg
            width={styles.image.width ? styles.image.width - 20 : 0}
            height={styles.image.height ? styles.image.height - 20 : 0}
        />
    ) : (
        // @ts-ignore
        <Image source={{uri}} style={[styles.image, props.style]} />
    );
};
