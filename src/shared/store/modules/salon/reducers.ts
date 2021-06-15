import {combineReducers} from 'redux';
import {ReduxAction} from '../../types';

export interface SalonState {}

export const INITIAL_STATE = {};

const salonReducer = (
    state = INITIAL_STATE,
    action: ReduxAction,
): SalonState => {
    return state;
};

export default combineReducers([salonReducer]);
