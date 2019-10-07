import React from 'react';

function ProductListItem(props) {
  return (
    <div className="col-3">
      <div className="thumbnail">
        <img src="" alt=""/>
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
