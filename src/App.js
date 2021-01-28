import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
//import About from './components/pages/About';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/experience' exact component={Experience} />
          <Route path='/projects' exact component={Projects} />
          {/*<Route path='/about' exact component={About} />*/}
        </Switch>
        </Router>
    </>
  );
}

export default App;
