import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-4">
      <div className="thumbnail">
        <h1 className="text-center">
          <i className="fas fa-cat"></i>
        </h1>
        {/* <img src="..server/public/images/example-product.png" alt=""/> */}
        <div className="caption">
          <h3>Product Name</h3>
          <h6>$1.00</h6>
          <p>Product Description</p>
        </div>
      </div>
    </div>

  );

}

export default ProductListItem;
