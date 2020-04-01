import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

// Components
import PrivateRoute from "./components/PrivateRoute";
import Landing from './components/Landing/Landing';
import RegisterForm from "./components/Landing/RegisterForm";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
      <Provider store={store}>
          <Router>
              <Route exact path='/' component={Landing} />
              <Route exact path='/signup' component={RegisterForm} />
              <Switch>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
