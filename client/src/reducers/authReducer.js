import { FETCH_USER } from '../actions/types';
import { bindActionCreators } from 'redux';

// 데이터 전체, 과업 지시서를 같이 넘겨줌 (reducer의 형식)
// action = 객체, actionCreate = 함수
const auth = (state=null, action) => { 
  // console.log(action);
  switch ( action.type) {
    case FETCH_USER:
      return action.payload.data || false;  // undefined 경우에 false
    default:
      return state;    
  }
}

export default auth;