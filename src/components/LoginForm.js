import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';

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
	
	onButtonPress() {
		const { email, password } = this.props;

		this.props.loginUser({ email, password });
	}

	renderError() {
		console.log(this.props.error);
		if (this.props.error) {
			return (
				<View style={{ backgroundColor: 'white' }}>
					<Text style={styles.errorTextStyle}>
						{this.props.error}
					</Text>
				</View>
			);
		}
	}

	renderButton() {
		if (this.props.loading) {
			return <Spinner size='large' />;
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>Login</Button>
		);
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
                        value={this.props.password}
					/>
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}

// 6. State sent to all components (it is called w/ the global application state 
// as the parameter)
const mapStateToProps = (state) => {
	return {
        email: state.auth.email,
		password: state.auth.password,
		error: state.auth.error,
		loading: state.auth.loading
	};
};

const styles = {
	errorTextStyle: {
		fontSize: 20,
		alignSelf: 'center',
		color: 'red'
	}
};

// Import the Action Creator and hook it up to the component w/ the connect helper
export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
