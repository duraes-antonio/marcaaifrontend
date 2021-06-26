import { all } from "redux-saga/effects";
import authSagas from "./modules/auth/sagas";
import { salonSagas } from "./modules/salon/sagas";
import appointments from "./modules/appointments/saga";
import user from "./modules/user/saga";

// TODO: Tipar
export default function* rootSaga() {
    yield all({
        appointments,
        auth: authSagas,
        salon: salonSagas,
        user,
    });
}
