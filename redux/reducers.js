import { combineReducers, createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import taskReducer from './taskReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    taskReducer: taskReducer,
    routing: routerReducer
});

export default rootReducer;
