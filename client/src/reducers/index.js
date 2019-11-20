import { combineReducers } from 'redux';
import appReducer from './appReducer';
import submit from './submit';

export default combineReducers({
    appReducer,
    submit
});