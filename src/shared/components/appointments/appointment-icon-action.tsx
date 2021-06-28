import React, {memo, useCallback, useEffect, useState} from 'react';
import {
    AppointmentStatus,
    RatingAppointmentInput,
    UserAppointment,
} from '../../../domain/entities/appointment';
import {services} from '../../../data/services/di';
import ActionButton from '../buttons/action-button';
import {colorRed, colorYellow} from '../../styles/global-styles';
import {actionsUI} from '../../store/modules/user-interface/actions';
import AppointmentRating from './appointment-rating';
import {IconLib} from '../icon/icon-lib';
import {actionsAppointment} from '../../store/modules/appointments/actions';
import {useDispatch, useSelector} from 'react-redux';
import {IdType} from '../../store/types';
import reduxSelectors from '../../store/root-selector';

function AppointmentIconAction(props: {appointment: UserAppointment}) {
    const dispatch = useDispatch();
    const {modalContent} = useSelector(reduxSelectors.userInterface);
    const [review, setReview] = useState<RatingAppointmentInput>({
        appointmentId: props.appointment.id,
        value: 5,
    });

    const searchAndSetRating = useCallback(async (ratingId: IdType) => {
        setReview(await services.appointments.getReview(ratingId));
    }, []);

    const dispatchSetModal = useCallback(() => {
        dispatch(
            actionsUI.setModalContent(
                <AppointmentRating
                    rating={review}
                    update={!!props.appointment.ratingId}
                />,
            ),
        );
    }, [dispatch, review, props.appointment.ratingId]);

    useEffect(() => {
        if (!props.appointment.ratingId) {
            return;
        }
        searchAndSetRating(props.appointment.ratingId);
    }, [modalContent, props.appointment.ratingId, searchAndSetRating]);

    if (props.appointment.status === AppointmentStatus.CANCELED) {
        return null;
    }

    if (props.appointment.status === AppointmentStatus.DONE) {
        const rated = !!props.appointment.ratingId;

        return (
            <ActionButton
                color={colorYellow}
                onPress={dispatchSetModal}
                name={rated ? 'star' : 'star-o'}
                lib={IconLib.FONT_AWESOME}
                text={rated ? 'avaliado' : 'avaliar'}
            />
        );
    }
    return (
        <ActionButton
            color={colorRed}
            onPress={() =>
                dispatch(actionsAppointment.cancelRequest(props.appointment.id))
            }
            name={'calendar-remove'}
            lib={IconLib.MATERIAL_COMMUNITY}
            text={'cancelar'}
        />
    );
}

export default memo(AppointmentIconAction);
