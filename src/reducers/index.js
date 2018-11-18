import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import EmployeeFormReducer from './EmployeeFormReducer';

export default combineReducers({
    // The key represents the property of state that is being produced
    // (the auth piece of State is produced by the AuthReducer)
    auth: AuthReducer,
    employeeForm: EmployeeFormReducer
});
