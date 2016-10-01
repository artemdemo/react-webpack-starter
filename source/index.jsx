import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import './styles/general.less';

import history from './history';
import store from './store';

import MainView from './views/MainView';

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/'>
                <IndexRoute component={MainView} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
