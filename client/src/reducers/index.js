import { combineReducers } from 'redux';
import reportReducer from './reportReducer';
import submitReducer from './submitReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
    reportReducer,
    galleryReducer,
    submitReducer
});