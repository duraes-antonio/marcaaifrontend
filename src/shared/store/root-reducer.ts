import {combineReducers} from 'redux';
import auth from './modules/auth/reducers';
import salon from './modules/salon/reducers';
import {userReducer} from './modules/user/reducers';
import appointments from './modules/appointments/reducer';
import userInterfaceReducer from './modules/user-interface/reducer';
import tempReducer from './modules/temp/reducer';

export default combineReducers({
    appointments,
    auth,
    salon,
    user: userReducer,
    userInterface: userInterfaceReducer,
    temp: tempReducer,
});
