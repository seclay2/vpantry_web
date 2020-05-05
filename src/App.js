import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';

// Components
import PrivateRoute from "./components/private-route/PrivateRoute";
import Landing from './components/landing/Landing';
import RegisterForm from "./components/landing/RegisterForm";
import Dashboard from "./components/dashboard/Dashboard";
import ItemForm from "./components/dashboard/pantriesPage/ItemForm";
import UpdateItemForm from './components/dashboard/pantriesPage/UpdateItemForm';
import AddPantryForm from './components/dashboard/pantriesPage/AddPantryForm';

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Route exact path='/' component={Landing} />
              <Route exact path='/signup' component={RegisterForm} />
              <Switch>
                  <PrivateRoute exact path='/dashboard' component={Dashboard} />
                  <PrivateRoute exact path='/additem' component={ItemForm} />
                  <PrivateRoute exact path='/updateitem' component={UpdateItemForm}/>
                  <PrivateRoute exact path='/addpantry' component={AddPantryForm} />
              </Switch>
          </Router>
      </Provider>
  );
}

export default App;
