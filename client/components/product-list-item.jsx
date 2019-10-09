import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-4 mb-3 h-10 set-height">
      <div className="card h-100">
        <img className="card-img-top h-50 img-fluid p-3" src={props.image} alt="" />
        <div className="card-body h-50 p-3">
          <h3>{props.name}</h3>
          <h6>{props.price}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>

  );

}

export default ProductListItem;