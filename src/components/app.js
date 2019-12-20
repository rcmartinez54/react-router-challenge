import React, { Component } from 'react';
import AboutMenu from './about-menu';
import { Route, Switch } from 'react-router-dom';


export default class App extends Component {
    render() {
        return (
            <div className="app">
                {/* This should only show up on /about/foo, /about/bar, or /about/foo/bar */}
                <Switch>
                    <Route exact path='/' component={AboutMenu} />
                    <Route exact path='/about/foo' component={AboutMenu} />
                    <Route exact path='/about/bar' component={AboutMenu} />
                    <Route exact path='/about/foo/bar' component={AboutMenu} />  
                </Switch>    
                {/* <AboutMenu /> */}
            </div>
        );
    }
}
