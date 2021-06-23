import { all, call, put, takeEvery } from "redux-saga/effects";
import { actionsUser, ActionUserType } from "./actions";
import { services } from "../../../../data/services/di";
import { ReduxActionWithId } from "../../types";

// TODO: Falta tratamento de erro
function* like$(action: ReduxActionWithId) {
    yield call(() => services.provider.favoriteToggle(action.value));
    yield put(actionsUser.likeProvider(action.value));
}

// TODO: Falta tratamento de erro
function* unlike$(action: ReduxActionWithId) {
    yield call(() => services.provider.favoriteToggle(action.value));
    yield put(actionsUser.unlikeProvider(action.value));
}

export const userSaga$ = all([
    takeEvery(ActionUserType.LIKE_PROVIDER_REQUEST, like$),
    takeEvery(ActionUserType.UNLIKE_PROVIDER_REQUEST, unlike$),
]);

export default userSaga$;
