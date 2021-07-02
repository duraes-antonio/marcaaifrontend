import React, {memo} from 'react';
import Tag, {TagProps} from './tag';

function TagDistance(
    props: {distanceInMeters: number} & Omit<TagProps, 'children'>,
): JSX.Element {
    const less1Km = props.distanceInMeters < 1000;
    const distanceStandard = less1Km
        ? props.distanceInMeters
        : props.distanceInMeters / 1000;
    const numberFormated = distanceStandard
        .toFixed(less1Km ? 0 : 1)
        .replace('.', ',');
    return <Tag {...props}>{`${numberFormated} ${less1Km ? 'm' : 'km'}`}</Tag>;
}

export default memo(TagDistance);
