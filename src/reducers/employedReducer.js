import {EMPLOY_UPDATE,EMPLOY_CREATE,EMPLOY_SAVE_SUCCESS} from '../actions/types';

const INITIAL_STATE={
  name:'',
  phone:'',
  shift:''
}

export default (state=INITIAL_STATE,action)=>{
  switch(action.type){
    case EMPLOY_UPDATE:
      return{...state,[action.payload.prop]:action.payload.value};
    case EMPLOY_CREATE:
      return INITIAL_STATE;
    case EMPLOY_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
}