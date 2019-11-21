import { combineReducers } from 'redux';
import toggle from './toggle';
import submit from './submit';
import image from './image';

export default combineReducers({
    toggle,
    submit,
    image
});