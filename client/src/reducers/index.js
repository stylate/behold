import { combineReducers } from 'redux';
import reportReducer from './reportReducer';
import submitReducer from './submitReducer';
import imageReducer from './imageReducer';

export default combineReducers({
    reportReducer,
    imageReducer,
    submitReducer
});