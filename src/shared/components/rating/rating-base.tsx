import React, {memo} from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Rating} from 'react-native-ratings';
import styled from 'styled-components/native';
import {colorLabel} from '../../styles/global-styles';

const styles = StyleSheet.create({
    rating: {
        alignSelf: 'flex-start',
    },
});

const View = styled.View`
    align-items: center;
    flex-direction: row;
`;

const RatingValue = styled.Text`
    color: ${colorLabel};
    font-size: 11px;
    margin-left: 5.5px;
`;

export interface RatingProps {
    readonly?: boolean;
    value?: number;
    size?: number;
    showValue?: boolean;
    allowFloat?: boolean;
    onChange?: (v: number) => void;
    style?: ViewStyle;
}

const RatingBase = (props: RatingProps) => {
    const valueRounded = props.value ? +props.value.toFixed(2) : 0;
    return (
        <View style={props.style}>
            <Rating
                fractions={props.allowFloat ? 2 : 0}
                imageSize={props.size}
                ratingCount={5}
                readonly={props.readonly}
                startingValue={valueRounded}
                style={styles.rating}
                onFinishRating={props.onChange}
            />
            {valueRounded > 0 && props.showValue ? (
                <RatingValue>{valueRounded}</RatingValue>
            ) : null}
        </View>
    );
};

RatingBase.defaultProps = {
    allowFloat: true,
    showValue: true,
    readonly: true,
    size: 14.5,
    value: 0,
} as RatingProps;

export default memo(RatingBase);
