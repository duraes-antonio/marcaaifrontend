import React, {memo, useMemo} from 'react';
import {Image} from 'react-native';
import {UserAppointment} from '../../../../domain/entities/appointment';
import {
    AppointmentTime,
    Container,
    InfoContainer,
    ProviderName,
    ServiceName,
    styles,
} from './styles';
import AppointmentIconAction from '../appointment-icon-action';
import * as Animatable from 'react-native-animatable';

function Appointment(props: {
    data: UserAppointment;
    index: number;
}): JSX.Element {
    const {service} = props.data;
    const timeTransition = 350;
    const Icon = useMemo(
        () => <AppointmentIconAction appointment={props.data} />,
        [props.data],
    );
    return (
        <Animatable.View
            animation={'slideInDown'}
            duration={timeTransition}
            useNativeDriver>
            <Container style={styles.containerShadow}>
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
                    {Icon}
                </InfoContainer>
            </Container>
        </Animatable.View>
    );
}

export default memo(Appointment);
