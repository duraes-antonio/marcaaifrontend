import React, {memo} from 'react';
import {ViewStyle} from 'react-native';
import RatingBase from './rating-base';

export interface RatingStarsProps {
    value?: number;
    size?: number;
    onChange?: (v: number) => void;
    style?: ViewStyle;
}

function RatingStars(props: RatingStarsProps) {
    return (
        <RatingBase
            size={props.size}
            readonly={false}
            allowFloat={false}
            showValue={false}
            onChange={props.onChange}
            value={props.value}
            style={props.style}
        />
    );
}

export default memo(RatingStars);
