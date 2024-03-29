import React from 'react';
import 'bootswatch/dist/cyborg/bootstrap.min.css'; // Added this :boom:
import './App.css';
import FieldAgent from './components/FieldAgent';
import AgentList from './components/AgentList';
import UpdateAgent from './components/UpdateAgent';
import RemoveAgent from './components/RemoveAgent';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';
import AuthContext from './components/AuthContext';
import ControlPanel from './components/ControlPanel';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { useState,useEffect } from 'react';
import jwt_decode from 'jwt-decode';

function App() {

  const [user, setUser] = useState(null);
  const [message, setMessages] = useState("Active");
  const [fieldAgents, setFieldAgents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/api/agent")
        .then(response => {
            if (response.status !== 200) {
                return Promise.reject("get didn't work ...");
            }
            return response.json();
        })
        .then(json => setFieldAgents(json))
        .catch(console.log("oops..."));
}, []);

//const addFetch = (agent) => {
  async function addFetch(agent) {
    const init = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(agent)
    };

    await fetch("http://localhost:8080/api/agent", init)
    .then(response => {
        if(response.status !== 201){
            return Promise.reject("Error")
        }
        return response.json();
    })
    .then(json => {
        setFieldAgents([...fieldAgents, json]);
        setMessages("");
    })
    .catch(console.log);

}

const addAgent = (agent) => {
    let canSet = true;

    for(let i = 0; i < fieldAgents.length; i++){
        if(agent.firstName === fieldAgents[i].firstName &&
            agent.lastName === fieldAgents[i].lastName){
            canSet = false;
        }
    }

    if(canSet){
        addFetch(agent);
    }else{
        setMessages("Agent with this information is already active");
    }
}

const removeAgent = (agentId) => {
  let newAgents = [];

  for(let i = 0; i < fieldAgents.length; i++){
      if(fieldAgents[i].agentId !== agentId){
          newAgents.push(fieldAgents[i]);
      }
  }

  if(newAgents.length !== fieldAgents.length){
      setFieldAgents(newAgents);
      setMessages("");
  }else{
      setMessages("Could not find agent to deactivate");
  }

}

  const login = (token) => {
    const {id, sub: username, roles: rolesString } = jwt_decode(token);
    const roles = rolesString.split(',');

    const user = {
      id, 
      username,
      roles,
      token,
      hasRole(role){
        return this.roles.includes(role);
      }
    }

    setUser(user);
  }

  const authenticate = async (username, password) => {
    const response = await fetch('http://localhost:5000/authenticate', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if(response.status === 200) {
      const { jwt_token } = await response.json();
      login(jwt_token);
    } else if (response.status === 403) {
      throw new Error('Bad username or password');
    } else {
      throw new Error('There was a problem logging you in')
    }
  }

  const logout = () => {
    setUser(null);
  }

  const auth = {
    user,
    authenticate,
    logout
  }

  return (
    <div className="App">
      <AuthContext.Provider value={auth}>
        <Router>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab">
                <Link to="/agents">Agents</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab">
                <Link to="/agents/add">Add Agent</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" >
                <Link to="/agents/edit/:id">Edit Agent</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab">
                <Link to="/agents/delete/:id">Delete Agent</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab">
                <Link to="/login" onClick={logout}>Log out</Link>
              </a>
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
            {user ? (
                <ControlPanel parentAddAgent={addAgent}/>
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/agents/edit/:id">
              {user ? (
                <UpdateAgent />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/agents/delete/:id">
            {user ? (
                <RemoveAgent />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/agents">
            {user ? (
                <AgentList agents={fieldAgents} />
              ) : (
                <Redirect to="/login" />
              )}
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
