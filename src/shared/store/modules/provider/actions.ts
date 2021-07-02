import {IdType, ReduxActionWithId, ReduxActionWithValue} from '../../types';
import {ProviderInput} from '../../../../domain/entities/provider';
import {StringNullable} from '../../../types/general';

export enum ActionProviderType {
    CREATE = '@provider/create',
    GET = '@provider/get',
    SEARCH = '@provider/search',
}

export const actionsProvider = {
    create: (data: ProviderInput): ReduxActionWithValue<ProviderInput> => ({
        type: ActionProviderType.GET,
        value: data,
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
