// import React from "react";
import { Link } from "react-router-dom";
// import { Router } from "react-router-dom";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Navbar() {
  return (
    <div>
      <header>
        <div className="container1">
          <div>
            <img src="images/logo.png" alt="logo.png" id="logo" />
          </div>

          {/* <img src="logo.png" alt="logo.png" /> */}
          <h2 id="heading">Let'sCafe</h2>
        </div>
        <nav>
          <ul id="navigation">
            <li>
              <Link  className="nav-item"  to="/">Home</Link>
            </li>
            <li>
              <Link className="nav-item"  to="about">About</Link>
            </li>
            <li>
              <Link className="nav-item" to="menu">Menu</Link>
            </li>
           
            <li>
              <Link className="nav-item" to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
       
        <div>
          <Link to="login" type="button" className="btn btn-outline-success">
            Login/Signup
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
