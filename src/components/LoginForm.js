import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { emailChanged, passwordChanged } from '../actions';

// Using Redux to handle state at the application state level, so that 
// component does not hold logic for state
class LoginForm extends Component {
    // Glue code - event handlers (not really logic)
	onEmailChange(text) {
        // 2. Call the Action Creator, so that the application level state can
        // be changed

        // Because the Action Creator is wired up to the component through the connect
        // helper, we have access to the Action Creator this this.props
		this.props.emailChanged(text);
    }
    
    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

	render() {
		return (
			<Card>
				<CardSection>
					<Input
                        // 1. User types something and calls an Action Creator through this
                        // onChangeText event handler (this is a callback)
						onChangeText={this.onEmailChange.bind(this)}
						label="Email"
						placeholder="email@gmail.com"
						value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						label="Password"
						placeholder="password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.email}
					/>
				</CardSection>

				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		);
	}
}

// 6. State sent to all components (it is called w/ the global application state 
// as the parameter)
const mapStateToProps = (state) => {
	const { newEmail, newPassword } = state.auth;

	return {
        email: newEmail,
        password: newPassword
	};
};

// Import the Action Creator and hook it up to the component w/ the connect helper
export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
