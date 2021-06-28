import {
    IdType,
    ReduxAction,
    ReduxActionWithId,
    ReduxActionWithValue,
} from '../../types';
import {
    IUserAppointment,
    RatingAppointmentInput,
    UserAppointment,
} from '../../../../domain/entities/appointment';

export enum ActionAppointmentType {
    ADD = '@appointments/add',
    SET = '@appointments/set',
    ALL_REQUEST = '@appointments/all-request',
    CANCEL_REQUEST = '@appointments/cancel-request',
    ADD_REVIEW_REQUEST = '@appointments/add-review-request',
    UPDATE_REVIEW_REQUEST = '@appointments/update-review-request',
    CANCEL = '@appointments/cancel',
}

export type ActionAppointment = ReduxActionWithValue<IUserAppointment>;

export const actionsAppointment = {
    add(value: IUserAppointment): ActionAppointment {
        return {type: ActionAppointmentType.ADD, value};
    },
    allRequest(): ReduxAction {
        return {type: ActionAppointmentType.ALL_REQUEST};
    },
    cancelRequest(id: IdType): ReduxActionWithId {
        return {type: ActionAppointmentType.CANCEL_REQUEST, value: id};
    },
    addReviewRequest(
        reviewData: RatingAppointmentInput,
    ): ReduxActionWithValue<RatingAppointmentInput> {
        return {
            type: ActionAppointmentType.ADD_REVIEW_REQUEST,
            value: reviewData,
        };
    },
    updateReviewRequest(
        reviewData: RatingAppointmentInput,
    ): ReduxActionWithValue<RatingAppointmentInput> {
        return {
            type: ActionAppointmentType.UPDATE_REVIEW_REQUEST,
            value: reviewData,
        };
    },
    set(data: UserAppointment[]): ReduxActionWithValue<UserAppointment[]> {
        return {type: ActionAppointmentType.SET, value: data};
    },
};
