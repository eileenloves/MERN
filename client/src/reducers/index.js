import { combineReducers} from 'redux'; //reducer들을 묶어주는 모듈
import authReducer from './authReducer';

const reducers = combineReducers({
  auth:authReducer,
})

export default reducers;