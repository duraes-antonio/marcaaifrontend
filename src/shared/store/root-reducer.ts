import {combineReducers} from 'redux';
import salon from './modules/salon/reducers';
import user from './modules/user/reducers';

export default combineReducers({
    salon,
    user,
});
