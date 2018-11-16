import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
    <View style={styles.constainerStyle}>
        {props.children}
    </View>
);

const styles = {
    constainerStyle: {
        borderBottomWidth: 1,
        paddingTop: 30,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
