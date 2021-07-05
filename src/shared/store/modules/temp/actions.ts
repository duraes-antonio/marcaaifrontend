import {ReduxActionWithValue} from '../../types';
import {Nullable} from '../../../types/general';
import {IProviderBasic} from '../../../../domain/entities/provider';

export enum ActionTempType {
    SELECT_PROVIDER = '@temp/select_provider',
    SET_MODAL_CONTENT = '@temp/set_modal_content',
}

export const actionsTemp = {
    setModalContent(
        content?: Nullable<JSX.Element>,
    ): ReduxActionWithValue<Nullable<JSX.Element>, ActionTempType> {
        return {type: ActionTempType.SET_MODAL_CONTENT, value: content};
    },

    selectProvider(
        provider: IProviderBasic,
    ): ReduxActionWithValue<IProviderBasic> {
        return {type: ActionTempType.SELECT_PROVIDER, value: provider};
    },
};
