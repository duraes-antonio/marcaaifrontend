import {IdType, ReduxActionWithId, ReduxActionWithValue} from '../../types';
import {IProvider} from '../../../../domain/entities/provider';
import {StringNullable} from '../../../types/general';

export enum ActionProviderType {
    CREATE = '@provider/create',
    FAVORITE_TOGGLE = '@provider/favorite-toggle',
    GET = '@provider/get',
    SEARCH = '@provider/search',
}

export type ActionProvider = ReduxActionWithValue<IProvider>;

export const actionsProvider = {
    create: (data: IProvider): ActionProvider => ({
        type: ActionProviderType.GET,
        value: data,
    }),
    favoriteToggle: (id: IdType): ReduxActionWithId => ({
        type: ActionProviderType.FAVORITE_TOGGLE,
        value: id,
    }),
    get: (id: IdType): ReduxActionWithId => ({
        type: ActionProviderType.GET,
        value: id,
    }),
    search: (term?: StringNullable): ReduxActionWithValue<StringNullable> => ({
        type: ActionProviderType.GET,
        value: term,
    }),
};
