import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {Appointment} from './appointment';
import {RootState} from '../../store/types';
import {AppointmentState} from '../../store/modules/appointments/appointments.reducer';

const Container = styled.ScrollView`
    position: relative;
    width: 100%;
    min-height: 100%;
    flex: 1;
    padding: 5px;
`;

const Appointments = () => {
    const appointments: AppointmentState = useSelector<
        RootState,
        AppointmentState
    >(s => s.appointments);
    return (
        <Container>
            {appointments.map(a => (
                <Appointment key={a.id} data={a} />
            ))}
        </Container>
    );
};

export default Appointments;
