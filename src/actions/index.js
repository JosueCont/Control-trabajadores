import firebase from 'firebase';
import {EMAIL_CHANGED} from './types';
import {
  PASSWORD_CHANGED, 
  LOGIN_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER} from './types';

export const emailChanged=(text)=>{
  return{
    type:EMAIL_CHANGED,
    payload:text
  }
};

export const passChanged=(text)=>{
  return{
    type: PASSWORD_CHANGED,
    payload:text
  }
};

export const loginUser=({email,password})=>{
  return async(dispatch)=>{
    dispatch({type:LOGIN_USER})    
    /*try{
      const result= firebase.auth().signInWithEmailAndPassword(email,password)
      dispatch(loginUserSucces(result));
    }
    catch (error) {
      loginFail(dispatch);
      try{
        const result=firebase.auth().createUserWithEmailAndPassword(email,password)
        dispatch(loginUserSucces(result));
      }
      catch (error){
        loginFail(dispatch);
      }
      
    }*/
    await firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user=> dispatch(loginUserSucces(user)))
    .catch(()=>{
       firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(user=>dispatch(loginUserSucces(user)))
      .catch(()=>{loginFail(dispatch)})
    });
  };
};

const loginFail=(dispatch)=>{
  dispatch({
    type: LOGIN_FAIL
  })
}

const loginUserSucces=(user)=>{
  return {
    type:LOGIN_USER_SUCCESS,
    payload:user
  }
};