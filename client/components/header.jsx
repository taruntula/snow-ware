import React from 'react';
import './header.css';

function Header(props) {
  return (
    <nav className="navbar fixed-top row text-light black">
      <div className="navbar-brand" href="#">
        <img className="img-fluid hand" onClick={() => props.scrollTop()} src="../../images/mountain-logo-black.png" width="50" height="50" alt="Logo"></img>
      </div>
      <ul className="navbar-nav font mr-auto mt-3">
        <li className="nav-item active">
          <h3>SNOW-WARE</h3>
        </li>
      </ul>
      <ul className="navbar-nav cart-header-font">
        <li className="nav-item">
          <h3>{props.cartItemCount}</h3>
        </li>
      </ul>
      <ul className="navbar-nav font pt-2">
        <li className="nav-item">
          <h1>
            <i onClick={() => props.view('cart', {})} className="fas fa-shopping-cart m-2 hand"></i>
          </h1>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
