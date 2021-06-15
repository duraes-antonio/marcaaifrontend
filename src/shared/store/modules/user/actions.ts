import {ReduxActionWithValue} from '../../types';
import {User} from '../../../../domain/entities/user';

export enum ActionUserType {
    UPDATE = '@user/update',
    CREATE = '@user/create',
    RECOVER = '@user/recover',
    SET = '@user/set',
}

export type ActionUser = ReduxActionWithValue<User>;

export const actionsUser = {
    recoverUserOrRedirect(): ActionUser {
        return {type: ActionUserType.RECOVER};
    },

    setUser(user: User): ActionUser {
        return {
            type: ActionUserType.SET,
            value: user,
        };
    },
};
