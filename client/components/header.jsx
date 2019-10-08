import React from 'react';

function Header(props) {
  return (
    <div className="row justify-content-center">
      <h1 className="col-4">Wicked Sales</h1>
      <h1 className="col-2 ">
        <i className="fas fa-store"></i>
      </h1>
    </div>
  );
}

export default Header;
