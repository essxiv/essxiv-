// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

// Components
import Home from './components/Home';
import Experience from './components/Experience';
import store from '../redux/store';

// history creation with redux-store
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={Home} />
            <Route path="/about" component={Experience} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
