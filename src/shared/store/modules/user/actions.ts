import {IdType, ReduxActionWithId, ReduxActionWithValue} from '../../types';
import {User} from '../../../../domain/entities/user';

export enum ActionUserType {
    UPDATE = '@user/update',
    CREATE = '@user/create',
    LIKE_PROVIDER_REQUEST = '@user/like-request',
    UNLIKE_PROVIDER_REQUEST = '@user/unlike-request',
    LIKE_PROVIDER = '@user/like-local',
    UNLIKE_PROVIDER = '@user/unlike-local',
    RECOVER = '@user/recover',
    SET = '@user/set',
    SET_PROVIDERS_LIKED = '@user/set_providers_liked',
}

export type ActionUser = ReduxActionWithValue<User>;

export const actionsUser = {
    recoverUserOrRedirect(): ActionUser {
        return {type: ActionUserType.RECOVER};
    },

    setUser(user: User): ActionUser {
        return {type: ActionUserType.SET, value: user};
    },

    setProvidersLiked(providersId: IdType[]): ReduxActionWithValue<IdType[]> {
        return {type: ActionUserType.SET_PROVIDERS_LIKED, value: providersId};
    },

    likeProvider(providerId: IdType): ReduxActionWithId {
        return {type: ActionUserType.LIKE_PROVIDER, value: providerId};
    },

    likeProviderRequest(providerId: IdType): ReduxActionWithId {
        return {type: ActionUserType.LIKE_PROVIDER_REQUEST, value: providerId};
    },

    unlikeProvider(providerId: IdType): ReduxActionWithId {
        return {type: ActionUserType.UNLIKE_PROVIDER, value: providerId};
    },

    unlikeProviderRequest(providerId: IdType): ReduxActionWithId {
        return {
            type: ActionUserType.UNLIKE_PROVIDER_REQUEST,
            value: providerId,
        };
    },
};
