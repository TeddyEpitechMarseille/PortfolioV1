import React from 'react';
import {Redirect, BrowserRouter, Switch, Route} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import './styles/index.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/projets" component={Projects}/>
        <Route path="/a-propos" component={About}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/404" component={NotFound}/>
        <Redirect to="/404"/>
      </Switch>
    </BrowserRouter>
  );
};

export default App;