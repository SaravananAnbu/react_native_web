import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';
import { Provider } from 'react-redux';
import configureStore from '../store';
import history from '../history';
import { AppContainer } from 'react-hot-loader';
import jwtDecode from 'jwt-decode';

export const store = configureStore();

ReactDOM.render (
    (<Provider store={store}>
        <AppContainer>
            <Root history={history}/>
        </AppContainer>
    </Provider>),
    document.getElementById('app')
);

module.hot.accept();