import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter, {history} from './routers/AppRouter';
import configureStore from './store/configureStore';
import {startSetWorkouts} from './actions/workouts';
import {login, logout, startLoggedIn} from './actions/auth';
import getVisibleWorkouts from './selectors/workouts';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  console.log('Check for user');
  if (user) {
    console.log("User", user.uid);
    store.dispatch(login(user.uid));

    // Dispatch call to save user profile info into the database
    store.dispatch(startLoggedIn(user.uid, user.displayName, user.email));

    store.dispatch(startSetWorkouts()).then(() => {
     // console.log('Dispatch')
      renderApp();
      //console.log('Check if pathe = "/"')
     if (history.location.pathname === '/') {
       console.log('Before dashboard redirect');
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});