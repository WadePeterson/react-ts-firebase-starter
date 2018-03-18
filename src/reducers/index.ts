import { combineReducers } from 'redux';
import { firebaseReducer, DuckbaseState } from 'duckbase';

export interface RootState {
  firebase: DuckbaseState;
}

const rootReducer = combineReducers({
  firebase: firebaseReducer
});

export default rootReducer;
