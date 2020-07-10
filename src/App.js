import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route} 
from 'react-router-dom';

import './App.css';
import CreateBoard from '../src/components/CreateBoard/CreateBoard';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Detail from './components/Detail/Detail';

function App({match}) {
  return (
    <Router>
      <Navigation/>
       <div>
        <Switch>
          <Route path="/" exact component={Home}/>
          
          <Route path="/createboard" component={CreateBoard}/>
          <Route path="/:id" component={Detail}/>
                                                                      
        </Switch>
       </div>
    </Router>
  );
}

export default App;
