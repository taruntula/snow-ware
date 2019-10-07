import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-4">
      <div className="thumbnail">
        <h1 className="text-center">
          <img src={props.image} alt="" />
          {/* <i className="fas fa-cat"></i> */}
        </h1>
        {/* <img src="..server/public/images/example-product.png" alt=""/> */}
        <div className="caption">
          <h3>{props.name}</h3>
          <h6>{props.price}</h6>
          <p>{props.description}</p>
        </div>
      </div>
    </div>

  );

}

export default ProductListItem;
