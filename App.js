import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import Index from './src/index';
import reducers from './src/reducers/index';
import firebase from 'firebase';
import Employed from './src/components/Employes';
import CreateEmployed from './src/components/CreateEmploy';
import EditEmploy from './src/components/EditEmploy';

const navigator = createStackNavigator(
  {
    index: Index,
    trabajadores:Employed,
    crear:CreateEmployed,
    edit:EditEmploy
  },
  {
    initialRouteName: 'index',
    defaultNavigationOptions: {
      header: null,
    },
  },
);

const firebaseConfig = {
  apiKey: "AIzaSyBdfJc8Qn6z7m2yMGx0A_vrC6za78L8bHw",
  authDomain: "manager-436c0.firebaseapp.com",
  databaseURL: "https://manager-436c0.firebaseio.com",
  projectId: "manager-436c0",
  storageBucket: "manager-436c0.appspot.com",
  messagingSenderId: "237374424819",
  appId: "1:237374424819:web:024fcc1896a7db90715986",
  measurementId: "G-6M0BQ6ZCW3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider store={createStore(reducers,{},applyMiddleware(ReduxThunk))}>
      <App />
    </Provider>
  );
};
