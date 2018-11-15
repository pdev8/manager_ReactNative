import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';

export default combineReducers({
    // The key represents the property of state that is being produced
    // (the auth piece of State is produced by the AuthReducer)
    auth: AuthReducer
});
