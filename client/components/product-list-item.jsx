import React from 'react';
import './product-list-item.css';

function ProductListItem(props) {
  const id = props.id;
  const idObject = { id: id };
  const formattedPrice = '$' + (props.price / 100).toFixed(2);
  return (
    <div className="col-4 mb-4 h-10 catalog-height">
      <div className="card h-100 see-through">
        <img className="card-img-top h-50 img-fluid p-3" src={`../../images/${props.image}`} alt="" />
        <div className="card-body h-50 p-3 text-center d-flex flex-column ubuntu-font ">
          <h3 className="name-font-size">{props.name}</h3>
          <h6 className="price-font-size">{formattedPrice}</h6>
          <p>{props.description}</p>
          <button className="btn btn-light btn-lg mt-auto" onClick={() => props.newView('details', idObject)}>Details</button>
        </div>
      </div>
    </div>

  );

}

export default ProductListItem;
