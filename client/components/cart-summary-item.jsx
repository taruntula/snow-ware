import React from 'react';

function CartSummaryItem(props) {
  const name = props.name;
  const image = props.image;
  const description = props.description;
  const price = props.price;
  const formattedPrice = '$' + (price / 100).toFixed(2);
  return (
    <div className="row mb-2">
      <div className="col-2 cart-height">
        <img className="img-fluid h-100" src={`../../images/${image}`} alt="" />
      </div>
      <div className="col-10">
        <h3>{name}</h3>
        <h6>{formattedPrice}</h6>
        <p>{description}</p>
      </div>
    </div>

  );
}

export default CartSummaryItem;
