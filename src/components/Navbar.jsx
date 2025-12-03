import { useContext } from "react";
import GlobalContext from "../state/globalContext.js";
import {Link} from "react-router-dom";

import { IconShoppingCart } from '@tabler/icons-react';

import "./Navbar.css";

function Navbar() {
  const user = useContext(GlobalContext).user
  const cart = useContext(GlobalContext).cart

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand"></div>
        <h1>My Online Store</h1>
      </div>
      <div className="navbar-menu">
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">Home</Link>
          </li>
        </ul>
       
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/catalog" className="nav-link">Catalog</Link>
          </li>
        </ul>
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link >
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link >
          </li>
        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/admin" className="nav-link">Admin</Link >
          </li>
        </ul>
        
        <div>
          <div>{user.name}</div>
        </div>
      
        <div>
          <Link to="/cart" className="nav-link">
            <IconShoppingCart/> ({cart.length})
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
