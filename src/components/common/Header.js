// Import libraries for making a component
import React from 'react';
// Destructured import (to pull out just Text from the React Native library)
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => (
	<View style={styles.viewStyle}>
		<Text style={styles.textStyle}>{props.headerText}</Text>
	</View>
);

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative',
		paddingTop: 40
	},
	textStyle: {
		fontSize: 30
	}
};

// Make the component available to other parts of the app
export { Header };
