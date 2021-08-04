//TECH IMPORTS
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
//STYLING IMPORTS
import './index.css';
import styled from 'styled-components';
//CUSTOM IMPORTS
import { Dashboard } from './components/Dashboard';
import LoginForm from './components/login';
import RegisterForm from './components/register';
import Homepage from './components/Homepage';
import PrivateRoute from './components/PrivateRoute';

const StyledLink = styled(Link)`
  color: black;
  background-color: white;
  opacity: 80%;
  border: 2px #3a3a3a solid;
  text-decoration:none;
  position: absolute;
  right: 150px;
  padding: 10px;
  width: 6%;
  text-align:center;
  margin-top:.5%;
  font-size: 15px;

  &:hover {
    filter: brightness(0.9);
  }
`

function App() {

  const logout = () => {
    window.localStorage.removeItem('token');
  };

  return (
    <>
      <Router>
        <div className="logoAndHeading"></div>
        <h1 className="mainHeading">Rhishisikk</h1>
          <StyledLink onClick={logout} to="/">Logout</StyledLink>
          <Switch>
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <Route path="/login">
              <LoginForm />
            </Route>
            <Route path="/register" component={RegisterForm}/>
            <Route exact path="/" component={Homepage} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
