import React from 'react';
import './header.css';

function Header(props) {
  return (
    <nav className=" navbar fixed-top row text-light black">
      <div className="col-1">
        <img className="img-fluid" src={'../../images/mountain-logo-black.png'} alt=""/>
      </div>
      <div className="col-3 mt-3 font">
        <h3 className>SNOW-WARE</h3>
      </div>

      {/* <h5 className="col-1 black-logo">i
        <img src={'../../images/mountain-logo-black.png'} alt=""/>
      </h5> */}
      <h1 className="col-8">
        <div className="row justify-content-end cart-header-font">
          <h3 className="m-2">{props.cartItemCount} Items</h3>
          <i onClick={() => props.view('cart', {})} className="fas fa-shopping-cart m-2"></i>
        </div>
      </h1>
    </nav>
  );
}

export default Header;
