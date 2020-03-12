import firebase from 'firebase';
import {
  EMPLOY_UPDATE,
  EMPLOY_CREATE,
  EMPLOYEE_FETCH_SUCCES,
  EMPLOY_SAVE_SUCCESS,
} from './types';

export const employedUpdate = ({prop, value}) => {
  return {
    type: EMPLOY_UPDATE,
    payload: {prop, value},
  };
};

export const employCreate = ({name, phone, shift}, navigation) => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employes`)
      .push({name, phone, shift})
      .then(() => {
        navigation, dispatch({type: EMPLOY_CREATE});
      });
  };
};

export const employFetch = () => {
  const {currentUser} = firebase.auth();

  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employes`)
      .on('value', snapshot => {
        dispatch({type: EMPLOYEE_FETCH_SUCCES, payload: snapshot.val()});
      });
  };
};

export const employSave = ({name, phone, shift, uid}, navigation) => {
  const {currentUser} = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employes/${uid}`)
      .set({name, phone, shift})
      .then(() => {
        navigation, dispatch({type: EMPLOY_SAVE_SUCCESS});
      });
  };
};
