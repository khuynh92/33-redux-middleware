import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Dashboard from './dashboard/Dashboard.js';

import createAppStore from '../lib/store.js';


const store = createAppStore();


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={Dashboard} />
        </BrowserRouter> 
      </Provider>

    );
  }
}