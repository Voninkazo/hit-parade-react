import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import PopularSongs from './Components/PopularSongs';

function App() {
 
  return (
    <div>
      <Header />
     <Switch>
          <Route exact path="/">
              <PopularSongs />
          </Route>
          <Route path="/styles"></Route>
          <Route path="/add"></Route>
          <Route path="/cart"></Route>
      </Switch>
    </div>
  )
}

export default App

