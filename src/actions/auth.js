import {firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider} from '../firebase/firebase';
import database from '../firebase/firebase';
import uuid from 'uuid';

export const login = (uid) => ({
  type: 'LOGIN',
  // Gives each user a random id
  uid
});

// Add User Info
export const addUserInfo = (displayName, email) =>  {
  console.log("Add user info");
  return {
    type: 'ADD_USER_INFO',
    displayName,
    email
  };
}
// Save User Info to the database
export const startLoggedIn = (uid, displayName, email) => {
  console.log('startLoggedIn');
  return (dispatch) => {
    //   const uid = getState().auth.uid;
    //   const displayName = getState().auth.displayName;
    //   const email = getState().auth.email;
    const profile = {displayName, email};
    //   console.log("Profile", profile);


    database.ref(`users/${uid}/profileInfo`).set(profile).then(() => {
      console.log("Before dispatch");
      dispatch(addUserInfo(displayName, email));
    });
  };
};

// Google Login
export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

// Facebook Login
export const startFacebookLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(facebookAuthProvider);
  };
};


// Twitter Login
export const startTwitterLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(twitterAuthProvider);
  };
};

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};