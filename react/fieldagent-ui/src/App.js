import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.min.css'; // Added this :boom:
import './App.css';
import FieldAgent from './components/FieldAgent';
import Agents from './components/AgentList'
import AddAgent from './components/AddAgent'
import UpdateAgent from './components/UpdateAgent'
import RemoveAgent from './components/RemoveAgent'
import NotFound from './components/NotFound'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import AgentList from './components/AgentList';
import { useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#home"> 
              <Link to="/">Home</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#Agents">
              <Link to="/agents">Agents</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#addAgent">
            <Link to="/agents/add">Add Agent</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#editAgent">
              <Link to="/agents/edit/:id">Edit Agent</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#deleteAgent">
              <Link to="/agents/delete/:id">Delete Agent</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#login">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-bs-toggle="tab" href="#Register">Register</a>
          </li>
        </ul>


        <Switch>
          <Route exact path="/">
            {user ? (
              <FieldAgent />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/agents/add">
            <AddAgent />
          </Route>
          <Route path="/agents/edit/:id">
            {user ? (
              <UpdateAgent />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/agents/delete/:id">
            <RemoveAgent />
          </Route>
          <Route path="/agents">
            <Agents />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
