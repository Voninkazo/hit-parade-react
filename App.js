import React from 'react';
import {Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import PopularSongs from './pages/PopularSongs';
import Cart from './pages/Cart';
import Styles from './pages/Styles';
import SongDetail from './Components/SongDetail';
import SpecificSongs from './Components/SpecificSongs';
import AddForm from './pages/Add';

function App() {
  return (
    <div>
      <Header />
     <Switch>
          <Route exact path="/">
              <PopularSongs />
          </Route>
          <Route exact path="/styles">
              <Styles />
          </Route>
          <Route path="/styles/:style">
              <SpecificSongs />
          </Route>
          <Route path="/add">
            <AddForm />
          </Route>
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

