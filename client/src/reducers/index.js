import { combineReducers } from 'redux';
import reportReducer from './reportReducer';
import submit from './submit';
import imageReducer from './imageReducer';

export default combineReducers({
    reportReducer,
    imageReducer,
});