import {Link} from "react-router-dom";

import "./Navbar.css";

function Navbar() {
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
      
      </div>
    </nav>
  );
}

export default Navbar;
