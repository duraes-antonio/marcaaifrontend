import React, {memo} from 'react';
import RatingBase from './rating-base';

function RatingView(props: {value: number}) {
    return (
        <RatingBase
            size={14.5}
            readonly
            allowFloat
            value={props.value}
            showValue
        />
    );
}

export default memo(RatingView);
