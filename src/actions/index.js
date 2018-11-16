import firebase from 'firebase';
import { 
	EMAIL_CHANGED, 
	PASSWORD_CHANGED, 
	LOGIN_USER_SUCCESS, 
	LOGIN_USER_FAIL, 
	LOGIN_USER 
} from './types';

// 3. Each Action Creator returns (=>) an Action, all Actions are JS object
// w/ a property called 'type'
export const emailChanged = (text) => ({
	type: EMAIL_CHANGED,
	payload: text
});

export const passwordChanged = (text) => ({
	type: PASSWORD_CHANGED,
	payload: text
});

// Redux Thunk is used to handle any type of async Action Creator that is needed
// by the codebase (we are using it for Firebase, but it can be used for any type
// of AJAX request)
export const loginUser = ({ email, password }) => {
	// Redux Thunk sees that this method is being returned w/ a function and it will
	// immediately call the function w/ the dispatch method
	return (dispatch) => {
		dispatch({ type: LOGIN_USER });

		firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			// After the request is complete, we create our action and manually pass it off
			// to dispatch
			.then((user) => loginUserSuccess(dispatch, user))
			.catch(() => {
				firebase
					.auth()
					.createUserWithEmailAndPassword(email, password)
					.then((user) => loginUserSuccess(dispatch, user))
					.catch(() => loginUserFail(dispatch));
			});
	};
};

const loginUserFail = (dispatch) => {
	dispatch({
		type: LOGIN_USER_FAIL
	});
};

const loginUserSuccess = (dispatch, user) => {
	dispatch({
		type: LOGIN_USER_SUCCESS,
		payload: user
	});
};
