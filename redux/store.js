import { combineReducers, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

function configureStore() {
    let store = createStore(rootReducer, applyMiddleware(thunk));
    return store;
}

export default configureStore(); 