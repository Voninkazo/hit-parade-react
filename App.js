import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import PopularSongs from './pages/PopularSongs';
import Cart from './pages/Cart';
import SongDetail from './Components/SongDetail';

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
          <Route path="/cart">
              <Cart />
          </Route>
          <Route path="/songs/lyrics">
              <SongDetail />
          </Route>
      </Switch>
    </div>
  )
}

export default App

