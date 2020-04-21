import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">

        <nav>
          <Link to='/login'>Login</Link>
        </nav>

        <Switch>
          <Route path='/login' component={Login}/>
          <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
