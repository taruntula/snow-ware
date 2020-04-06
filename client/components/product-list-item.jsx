import React from 'react';
import './product-list-item.css';

function ProductListItem(props) {
  const id = props.id;
  const idObject = { id: id };
  const formattedPrice = '$' + (props.price / 100).toFixed(2);
  return (
    <div className="col-sm-6 col-md-6 col-lg-4 mb-4 h-10 catalog-height">
      <div className="card h-100 see-through">
        <img onClick={() => props.newView('details', idObject)} className="catalog-width mx-auto card-img-top h-50 img-fluid p-3 hand" src={`../../images/${props.image}`} alt="" />
        <div className="card-body h-50 p-3 text-center d-flex flex-column ubuntu-font ">
          <h3 onClick={() => props.newView('details', idObject)} className="name-font-size hand">{props.name}</h3>
          <h6 className="price-font-size">{formattedPrice}</h6>
          <p>{props.description}</p>
          <button className="btn btn-light btn-lg mt-auto" onClick={() => props.newView('details', idObject)}>Details</button>
        </div>
      </div>
    </div>

  );

}

export default ProductListItem;
