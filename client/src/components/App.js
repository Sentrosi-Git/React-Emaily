// Using import instead of require because of ES6 (webpack & babel) syntax on front end
// uppercase naming convention because we're exporting a component
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">

        <BrowserRouter>
          <div>
          <Header />
          <Route exact={true} path="/" component={Landing}/>
          <Route exact path="/surveys" component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
          </div>

        </BrowserRouter>
      </div>
    );
  }
};

export default connect(null, actions)(App);
