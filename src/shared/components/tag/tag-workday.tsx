import React, {memo} from 'react';
import Tag, {TagProps} from './tag';
import {WorkdayStatus} from '../../../domain/entities/schedule';
import {colorGreen, colorRed, grey4} from '../../styles/global-styles';

const statusName: {[key in WorkdayStatus]: string} = {
    [WorkdayStatus.CLOSED_ALL_DAY]: 'Dia fechado',
    [WorkdayStatus.CLOSED_TEMPORARILY]: 'Fechado',
    [WorkdayStatus.OPENED]: 'Aberto',
    [WorkdayStatus.UNKNOWN]: 'Desconhecido',
};

const statusColor: {[key in WorkdayStatus]: string} = {
    [WorkdayStatus.CLOSED_ALL_DAY]: '#eb5757',
    [WorkdayStatus.CLOSED_TEMPORARILY]: colorRed,
    [WorkdayStatus.OPENED]: colorGreen,
    [WorkdayStatus.UNKNOWN]: grey4,
};

function TagWorkdayStatus(
    props: {status?: WorkdayStatus} & Omit<TagProps, 'children'>,
): JSX.Element {
    return (
        <Tag
            {...props}
            color={statusColor[props.status ?? WorkdayStatus.UNKNOWN]}>
            {statusName[props.status ?? WorkdayStatus.UNKNOWN]}
        </Tag>
    );
}

export default memo(TagWorkdayStatus);
