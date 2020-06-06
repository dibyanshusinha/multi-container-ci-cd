import React, { PureComponent } from 'react';
import {
  NavLink
} from 'react-router-dom';
import logo from './logo.svg';



const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <a  href="/"><img src={logo} className="App-logo" alt="logo" /></a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/others">OtherPage</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navbar;

