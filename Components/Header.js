import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (
    <header>
        <h1>Hit Parade</h1>
        <ul className="links-container">
          <li><Link to="/">Popular songs</Link></li>
          <li><Link to="/styles">Styles</Link></li>
          <li><Link to="/add">Add</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
    </header>
  )
}

export default Header
