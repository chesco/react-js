import {combineReducers} from 'redux';
import todos from './todosReducer';

const  rootReducer = combineReducers({
    todos //using short hand property name
});

export default rootReducer;