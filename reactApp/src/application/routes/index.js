import React from 'react';
import { connect } from 'react-redux';
import {
  Router, Route, IndexRoute, hashHistory
} from 'react-router';
import App from '../../App';
import TestScreen from '../screens/TestScreen';
import LandingScreen from '../screens/LandingScreen';
import CloudElementsApp from '../screens/CloudElementsApp';

class Routes extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        {/* open the below routes to add login and registration pages */}
        {/* <Route path="/login" name="login" component={Login} />
        <Route
          path="/registration"
          name="registration"
          component={Registration}
        /> */}
        <Route path="/" component={App}>
          <IndexRoute component={LandingScreen} />
          <Route path="/testScreen" name="testScreen" component={TestScreen} />
          <Route
            path="/cloudElementsApp"
            name="cloudElementsApp"
            component={CloudElementsApp}
          />
        </Route>
      </Router>
    );
  }
}

// const mapStateToProps = state => ({});

export default connect()(Routes);
