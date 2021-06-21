import {combineReducers} from 'redux';
import {StringNullable} from '../../../types/general';
import {ActionUser, ActionUserType} from './actions';
import {IdType} from '../../types';

export interface UserState {
    name: StringNullable;
    email: StringNullable;
    id: StringNullable;
    facebookId?: StringNullable;
    googleId?: StringNullable;
    providersFavorite: IdType[];
}

export const INITIAL_STATE: UserState = {
    id: null,
    facebookId: null,
    googleId: null,
    email: null,
    name: null,
    providersFavorite: [],
};

const userReducer = (state = INITIAL_STATE, action: ActionUser): UserState => {
    switch (action.type) {
        case ActionUserType.CREATE:
            return state;
        case ActionUserType.SET:
            return {...state, ...action.value};
        case ActionUserType.UPDATE:
            return {...state, ...action.value};
        default:
            return state;
    }
};

export default combineReducers([userReducer]);
