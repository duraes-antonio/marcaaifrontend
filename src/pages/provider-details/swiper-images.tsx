import React, {memo, useCallback} from 'react';
import {Dimensions, FlatList, StyleSheet, ViewStyle} from 'react-native';
import styled from 'styled-components/native';
import {CustomImage} from '../../shared/components/general/image';

export interface SwiperImagesProps {
    style: ViewStyle;
    images: string[];
}

const {width} = Dimensions.get('window');

const Container = styled.View`
    width: 100%;
    min-height: 250px;
    background-color: black;
`;

const styles = StyleSheet.create({
    image: {
        resizeMode: 'cover',
        opacity: 0.85,
    },
});

function SwiperImages(props: SwiperImagesProps): JSX.Element {
    const renderItem = useCallback(
        (info: {item: string}): JSX.Element => {
            return (
                <CustomImage
                    uri={info.item}
                    width={width}
                    height={props.style.height as number}
                    style={styles.image}
                />
            );
        },
        [props.style.height],
    );
    const keyExtractor = useCallback(
        (_, index: number) => index.toString(),
        [],
    );
    return (
        <Container style={props.style}>
            <FlatList
                data={props.images}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                horizontal
                pagingEnabled
            />
        </Container>
    );
}

export default memo(SwiperImages);
