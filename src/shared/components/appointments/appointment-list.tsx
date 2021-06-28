import React, {memo} from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import Appointment from './appointment-item/appointment';
import {AppointmentState} from '../../store/modules/appointments/reducer';
import reduxSelectors from '../../store/root-selector';
import {UserAppointment} from '../../../domain/entities/appointment';
import {pagePaddingHorizontal} from '../general/page/styles';
import {FlatList, LayoutAnimation} from 'react-native';

const ListContainer = styled.View`
    overflow: visible;
`;

const ItemContainer = styled.View`
    overflow: visible;
    padding-top: 5px;
    padding-right: ${pagePaddingHorizontal}px;
    padding-left: ${pagePaddingHorizontal}px;
    margin-bottom: 10px;
`;

export interface AppointmentListProps {
    header?: JSX.Element;
    loading?: boolean;
    onRefresh?: () => void;
}

function appointmentItem(data: {item: UserAppointment; index: number}) {
    return (
        <ItemContainer>
            <Appointment data={data.item} index={data.index} />
        </ItemContainer>
    );
}

function setAnimation() {
    LayoutAnimation.configureNext({
        duration: 250,
        update: {
            type: LayoutAnimation.Types.easeIn,
            springDamping: 0.5,
        },
    });
}

function AppointmentList(props: AppointmentListProps) {
    setAnimation();
    const appointments: AppointmentState = useSelector(
        reduxSelectors.appointments,
    );
    return (
        <ListContainer>
            <FlatList
                data={appointments}
                renderItem={appointmentItem}
                keyExtractor={i => i.id}
                ListHeaderComponent={props.header}
                stickyHeaderIndices={[0]}
                refreshing={props.loading}
                onRefresh={props.onRefresh}
            />
        </ListContainer>
    );
}

export default memo(AppointmentList);
