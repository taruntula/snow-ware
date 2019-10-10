import React from 'react';

function Header(props) {
  return (
    <div className="row">
      <h1 className="col-8 ml-3">Wicked Sales</h1>
      <h1 className="col-3 ml-5">
        <div className="row justify-content-end">
          <h3 className="m-2">{props.cartItemCount} Items</h3>
          <i className="fas fa-shopping-cart m-2"></i>
        </div>
      </h1>
    </div>
  );
}

export default Header;
