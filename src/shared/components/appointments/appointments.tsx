import React from 'react';
import styled from 'styled-components/native';
import {useSelector} from 'react-redux';
import {Appointment} from './appointment';
import {AppointmentState} from '../../store/modules/appointments/appointments.reducer';
import reduxSelectors from '../../store/root-selector';

const Container = styled.ScrollView`
    position: relative;
    width: 100%;
    min-height: 100%;
    flex: 1;
    padding: 5px;
`;

const Appointments = () => {
    const appointments: AppointmentState = useSelector(
        reduxSelectors.appointments,
    );
    return (
        <Container>
            {appointments.map(a => (
                <Appointment key={a.id} data={a} />
            ))}
        </Container>
    );
};

export default Appointments;
