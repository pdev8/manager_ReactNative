import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyAXt7c6qvzty651VGKbsY4lKGABZ2VJ7UA',
            authDomain: 'manager-6ac70.firebaseapp.com',
            databaseURL: 'https://manager-6ac70.firebaseio.com',
            projectId: 'manager-6ac70',
            storageBucket: 'manager-6ac70.appspot.com',
            messagingSenderId: '212094318559'
          };
        
          firebase.initializeApp(config);
    }

    render() {
        return (
           <Provider store={createStore(reducers)}>
               <LoginForm />
           </Provider>
        );
    }
}

export default App;
