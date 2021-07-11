import {ReduxActionWithValue} from '../../types';
import {Nullable} from '../../../types/general';
import {IProviderBasic} from '../../../../domain/entities/provider';
import {Service} from '../../../../domain/entities/service';

export enum ActionTempType {
    SELECT_PROVIDER = '@temp/select_provider',
    SELECT_SERVICE = '@temp/select_service',
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
    selectService(service: Service): ReduxActionWithValue<Service> {
        return {type: ActionTempType.SELECT_SERVICE, value: service};
    },
};
