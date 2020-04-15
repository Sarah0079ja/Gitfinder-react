import React, { Fragment } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Search from './component/users/Search'
import About from './component/pages/About';
import Users from './component/users/Users';
import User from "./component/users/User";
import Alert from './component/layout/Alert'
import {Container} from 'reactstrap';
import './App.css';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState'

const App = () => {

 
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div className="App">
              <Navbar />
              <Container className="container">
                <Alert alert={alert} />
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={(props) => (
                      <Fragment>
                        <Search />
                        <Users />
                      </Fragment>
                    )}
                  />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                </Switch>
              </Container>
            </div>
          </Router>
        </AlertState>
      </GithubState>
    );
  }

export default App;
