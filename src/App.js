import React, { Component } from 'react';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

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
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            // The provider (communication glue) tag works w/ the store (the store 
            // holds the application state) and the provider translates the data 
            // into something we can use in React
            <Provider store={store}>
               <Router />
            </Provider>
        );
    }
}

export default App;
