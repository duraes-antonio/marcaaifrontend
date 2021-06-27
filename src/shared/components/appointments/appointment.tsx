import React, {memo} from 'react';
import {Image} from 'react-native';
import {
    AppointmentStatus,
    UserAppointment,
} from '../../../domain/entities/appointment';
import ActionButton from '../buttons/action-button';
import {
    AppointmentTime,
    Container,
    InfoContainer,
    ProviderName,
    ServiceName,
    styles,
} from './styles';
import {colorRed, colorYellow} from '../../styles/global-styles';
import {IconLib} from '../icon/icon-lib';
import {useDispatch} from 'react-redux';
import {actionsUI} from '../../store/modules/user-interface/actions';
import {actionsAppointment} from '../../store/modules/appointments/actions';
import AppointmentRating from './appointment-rating';

function GetIconAction(appointment: UserAppointment): JSX.Element | null {
    const dispatch = useDispatch();
    if (appointment.status === AppointmentStatus.CANCELED) {
        return null;
    }
    if (appointment.status === AppointmentStatus.DONE) {
        const modalRating = (
            <AppointmentRating appointmentId={appointment.id} />
        );
        return (
            <ActionButton
                color={colorYellow}
                onPress={() =>
                    dispatch(
                        actionsUI.setModalContent(
                            <AppointmentRating
                                appointmentId={appointment.id}
                            />,
                        ),
                    )
                }
                name={'star'}
                lib={IconLib.FEATHER}
                text={'avaliar'}
            />
        );
    }
    return (
        <ActionButton
            color={colorRed}
            onPress={() =>
                dispatch(actionsAppointment.cancelRequest(appointment.id))
            }
            name={'calendar-remove'}
            lib={IconLib.MATERIAL_COMMUNITY}
            text={'cancelar'}
        />
    );
}

function Appointment(props: {data: UserAppointment}): JSX.Element {
    const {service} = props.data;
    return (
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
                {GetIconAction(props.data)}
            </InfoContainer>
        </Container>
    );
}

export default memo(Appointment);
