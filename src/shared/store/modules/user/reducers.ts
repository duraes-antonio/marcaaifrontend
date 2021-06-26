import {StringNullable} from '../../../types/general';
import {ActionUserType} from './actions';
import {IdType, ReduxActionWithValue} from '../../types';

export interface UserState {
    name: StringNullable;
    username: StringNullable;
    email: StringNullable;
    id: StringNullable;
    imageUrl?: StringNullable;
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
    username: null,
    providersFavorite: [],
};

export const userReducer = (
    state = INITIAL_STATE,
    action: ReduxActionWithValue<UserState | IdType | IdType[]>,
): UserState => {
    switch (action.type) {
        case ActionUserType.LIKE_PROVIDER:
            return <UserState>{
                ...state,
                providersFavorite: [...state.providersFavorite, action.value],
            };
        case ActionUserType.UNLIKE_PROVIDER:
            return <UserState>{
                ...state,
                providersFavorite: state.providersFavorite.filter(
                    id => id !== action.value,
                ),
            };
        case ActionUserType.SET_PROVIDERS_LIKED:
            return {
                ...state,
                providersFavorite: [...(action.value as IdType[])],
            };

        case ActionUserType.CREATE:
            return state;
        case ActionUserType.SET:
            return {...state, ...(action.value as UserState)};
        case ActionUserType.UPDATE:
            return {...state, ...(action.value as UserState)};

        default:
            return state;
    }
};

export default userReducer;
