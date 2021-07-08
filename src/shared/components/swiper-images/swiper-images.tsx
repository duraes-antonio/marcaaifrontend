import React, {memo, useCallback, useMemo, useState} from 'react';
import {Dimensions, FlatList, ViewStyle, ViewToken} from 'react-native';
import {CustomImage} from '../general/image';
import {Container, IndicadorContainer, IndicatorDot, styles} from './styles';
import {colorGreen} from '../../styles/global-styles';

export interface SwiperImagesProps {
    style: ViewStyle;
    images: string[];
}

const {width} = Dimensions.get('window');

function SwiperIndicators(props: {
    currentIndex: number;
    length: number;
}): JSX.Element {
    const iterable = useMemo(
        () => new Array<number>(props.length).fill(0),
        [props.length],
    );
    return (
        <IndicadorContainer>
            {iterable.map((_, i) => (
                <IndicatorDot
                    key={i.toString()}
                    style={{
                        backgroundColor:
                            i === props.currentIndex ? colorGreen : 'white',
                        elevation: 4,
                        shadowColor: 'rgba(0, 0, 0, .7)',
                    }}
                />
            ))}
        </IndicadorContainer>
    );
}

function SwiperImages(props: SwiperImagesProps): JSX.Element {
    const [index, setIndex] = useState(0);
    const onViewRef = React.useRef((items: {viewableItems: ViewToken[]}) => {
        if (items.viewableItems.length === 1) {
            setIndex(items.viewableItems[0].index ?? 0);
        }
    });
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
        (_, _index: number) => _index.toString(),
        [],
    );
    return (
        <Container style={props.style}>
            <SwiperIndicators
                currentIndex={index}
                length={props.images.length}
            />
            <FlatList
                onViewableItemsChanged={onViewRef.current}
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
