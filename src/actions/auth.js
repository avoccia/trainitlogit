import {firebase, googleAuthProvider, facebookAuthProvider, twitterAuthProvider} from '../firebase/firebase';
import database from '../firebase/firebase';
import uuid from 'uuid';

export const login = (uid, displayName, email) => ({
  type: 'LOGIN',
  // Gives each user a random id
  uid,
  // Fetches the display name and email for the user
  displayName,
  email
});

// Add User Info
export const addUserInfo = (info) => {
  info
};

// Save User Info to the database
export const startLoggedIn = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const displayName = getState().auth.displayName;
    const email = getState().auth.email;
    const profile = {displayName, email};

    if (!`users/${uid}/profileInfo`)
      return database.ref(`users/${uid}/profileInfo`).push(profile).then((ref) => {
        dispatch(addUserInfo({
          id: ref.key,
          ...profile
        }));
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