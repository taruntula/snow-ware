import React from 'react';
import './header.css';

function Header(props) {
  return (
    <nav className="navbar fixed-top row text-light black">
      <div className="navbar-brand" href="#">
        <img className="img-fluid" src="../../images/mountain-logo-black.png" width="50" height="50" alt="Logo"></img>
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
            <i onClick={() => props.view('cart', {})} className="fas fa-shopping-cart m-2"></i>
          </h1>
        </li>
      </ul>

      {/* <div className="col-1">
        <img className="img-fluid" src={'../../images/mountain-logo-black.png'} width="90" height="90" alt=""/>
      </div>
      <div className="col-3 mt-3 font">
        <h3 className>SNOW-WARE</h3>
      </div>
      <h1 className="col-6">
        <div className="row justify-content-end cart-header-font">
          <h3 className="m-2">{props.cartItemCount}</h3>
          <i onClick={() => props.view('cart', {})} className="fas fa-shopping-cart m-2"></i>
        </div>
      </h1> */}
    </nav>
  );
}

export default Header;
