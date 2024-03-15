import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import LoginPage from './components/LogInPage';


function App() {
  return (
    <Router>
      <div className='Navbar'>
        <NavBar />
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/" exact component={Home} />
          {/* Add more routes here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;