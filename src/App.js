import React, { Fragment, Component } from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Search from './component/users/Search'
import About from './component/pages/About';
import Users from './component/users/Users';
import User from "./component/users/User";
import Alert from './component/layout/Alert'
import {Container} from 'reactstrap';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }
  async componentDidMount() {
    this.setState({ loading: true})

    const res = await axios(`https://api.github.com/users?client_id
    =${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users: res.data, loading: false})
  }
  //clear users
  clearUsers = () => this.setState({users: [], loading: false});
  
  //set alert 
  setAlert = (msg, type) => {
    this.setState({alert: {msg, type}});

    setTimeout (() => this.setState({ alert: null }), 5000);
  };

  //search github users
  searchUsers = async text => {
      this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id
    =${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=d
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({ users: res.data.items, loading: false });
  }

  //get single github users
  getUser = async username => {
       this.setState({ loading: true });

       const res = await axios.get(`https://api.github.com/users/${username}?client_id
    =${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=d
     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

       this.setState({ user: res.data, loading: false });
  }

  render() {
    const {users, user, loading} = this.state
    
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Container className="container">
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render ={props => (
                <User { ...props } getUser={this.getUser} user={user} loading={loading}/>
              )}/>
            </Switch>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
