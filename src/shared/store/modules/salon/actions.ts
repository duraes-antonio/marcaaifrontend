import {ReduxAction} from '../../types';

const prefixAction = '@salon/';

export const ActionSalon = {
    UPDATE: `${prefixAction}update`,
    CREATE: `${prefixAction}create`,
    REMOVE: `${prefixAction}remove`,
    SET: `${prefixAction}set`,
};

// TODO; incluir salão como param
export function setSalon(): ReduxAction {
    return {
        type: ActionSalon.SET,
    };
}
