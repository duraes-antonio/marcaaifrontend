import React from 'react';
import {StyleSheet} from 'react-native';
import {Rating} from 'react-native-ratings';
import styled from 'styled-components/native';
import {colorLabel} from '../../styles/global-styles';

const styles = StyleSheet.create({
    rating: {
        display: 'flex',
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

const RatingView = (props: {value?: number}) => {
    const valueRounded = props.value ? +props.value.toFixed(2) : 0;
    return (
        <View>
            <Rating
                fractions={2}
                imageSize={14.5}
                ratingCount={5}
                readonly
                startingValue={valueRounded}
                style={styles.rating}
            />
            {valueRounded > 0 ? (
                <RatingValue>{valueRounded}</RatingValue>
            ) : null}
        </View>
    );
};

export default RatingView;
