import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_FAIL,
  LOGIN_USER} from '../actions/types';
const INITIAL_STATE={
  email:'',
  password:'',
  user:null,
  error:'',
  loadin:false,
};

export default (state=INITIAL_STATE,action)=>{
  console.log(action);
  switch(action.type){
    case EMAIL_CHANGED:
      return {...state,email:action.payload};
    case PASSWORD_CHANGED:
      return {...state,password:action.payload};
    case LOGIN_USER:
      return {...state,loadin:true,error:''};
    case LOGIN_USER_SUCCESS:
      return {...state,loading:false,user:action.payload};
    case LOGIN_FAIL:
      return {...state,error:'Atentificacion fallida',password:'',loadin:false};
    default:
    return state;
  }
};