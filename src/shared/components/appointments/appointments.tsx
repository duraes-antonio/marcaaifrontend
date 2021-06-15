import React from 'react';
import styled from 'styled-components/native';
import {
    IUserAppointment,
    UserAppointment,
} from '../../../domain/entities/appointment';
import {Appointment} from './appointment';

const Container = styled.ScrollView`
    position: relative;
    width: 100%;
    min-height: 100%;
    flex: 1;
    padding: 5px;
`;

const Appointments = () => {
    const x: IUserAppointment = {
        timeStart: new Date(2021, 9, 10, 15, 30, 0),
        timeEnd: new Date(2021, 9, 10, 14, 0, 0),
        service: {
            id: '',
            name: 'Depilação de braços a laser ',
            imageUrl:
                'https://i.ytimg.com/vi/7eBSbkBDwE4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBKK7TXZRFfLHio3m9D0CQGRg33NA',
            provider: {
                id: '',
                name: 'Flór de Lótus',
            },
        },
    };
    const appointments: UserAppointment[] = [
        {...x},
        {...x, timeStart: new Date()},
    ].map(input => new UserAppointment(input));
    return (
        <Container>
            {appointments.map(a => (
                <Appointment data={a} />
            ))}
        </Container>
    );
};

export default Appointments;
