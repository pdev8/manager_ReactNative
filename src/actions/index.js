import { EMAIL_CHANGED, PASSWORD_CHANGED } from './types';

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
