import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyBDs9b_r2-Hdc4MtFQ0Ih7rPUToCvDdEqs',
    authDomain: 'manager-74927.firebaseapp.com',
    databaseURL: 'https://manager-74927.firebaseio.com',
    storageBucket: 'manager-74927.appspot.com',
    messagingSenderId: '711779790999'
  };

  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
