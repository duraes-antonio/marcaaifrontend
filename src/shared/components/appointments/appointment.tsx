import React from 'react';
import {Image, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {UserAppointment} from '../../../domain/entities/appointment';
import {colorRed} from '../../styles/global-styles';
import ActionButton from '../buttons/action-button';
import {IconLib} from '../icon/icon-lib';
import {actionsAppointment} from '../../store/modules/appointments/appointments.actions';
import {
    AppointmentTime,
    Container,
    InfoContainer,
    ProviderName,
    ServiceName,
    styles,
} from './styles';

export function Appointment(props: {data: UserAppointment}): JSX.Element {
    const dispatch = useDispatch();
    const {service} = props.data;

    const cancelAppointment = () =>
        dispatch(actionsAppointment.cancel(props.data.id));

    return (
        <View style={styles.containerGeneral}>
            <Container activeOpacity={3 / 4} style={styles.containerShadow}>
                <Image
                    style={styles.serviceImage}
                    source={{uri: service.imageUrl}}
                />
                <InfoContainer>
                    <ServiceName>{service.name}</ServiceName>
                    <AppointmentTime>
                        {props.data.eventDateFormatted}
                    </AppointmentTime>
                    <ProviderName>{service.provider.name}</ProviderName>
                    <ActionButton
                        onPress={cancelAppointment}
                        color={colorRed}
                        name={'calendar-remove'}
                        lib={IconLib.MATERIAL_COMMUNITY}
                        text={'cancelar'}
                    />
                </InfoContainer>
            </Container>
        </View>
    );
}
