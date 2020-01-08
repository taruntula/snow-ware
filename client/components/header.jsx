import React from 'react';
import './header.css';

function Header(props) {
  return (
    <div className="row text-light bg-dark">
      <h1 className="col-8 ml-3 mt-3 font">SNOW-WARE</h1>
      <h1 className="col-3 ml-5">
        <div className="row justify-content-end">
          <h3 className="m-2">{props.cartItemCount} Items</h3>
          <i onClick={() => props.view('cart', {})} className="fas fa-shopping-cart m-2"></i>
        </div>
      </h1>
    </div>
  );
}

export default Header;
