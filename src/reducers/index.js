import {combineReducers} from 'redux';
import authReducer from './authReducer';
import employedReducer from './employedReducer';
import employeeFetchReducer from './employeeFetchReducer';

export default combineReducers({
  auth:authReducer,
  employeFrom: employedReducer,
  employees: employeeFetchReducer
});
