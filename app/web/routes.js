import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import App from './Components/App'
import Home from './Components/Home';
import history from '../history';

export default class Root extends Component {
    render() {
        return (
            <Router history={ history }>
                <Switch>
                    <App>
                        <Route exact path='/' component={Home}/>
                    </App>
                </Switch>   
            </Router>
        );
    }
}