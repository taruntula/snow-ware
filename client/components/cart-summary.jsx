import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const cartArray = props.cart;
  let sum = 0;
  for (var integerI = 0; integerI < cartArray.length; integerI++) {
    sum += parseInt(cartArray[integerI].price);
  }
  const formattedSum = '$' + (sum / 100).toFixed(2);
  return (
    <div className="container">
      <div className="row mt-2">
        <button onClick={() => props.view('catalog', {})} className="btn btn-link">
          <h6> Back to catalog</h6>
        </button>
      </div>
      <div className="row ml-1 mb-2">
        <h2>My Cart</h2>
      </div>
      <div className="col-12 mb-2">
        {cartArray.map(singleCartItem => {
          return <CartSummaryItem key={singleCartItem.id} image={singleCartItem.image} name={singleCartItem.name} price={singleCartItem.price} description={singleCartItem.shortDescription} />;
        })}
      </div>
      <div className="col-12 mt-6">
        <div className="row">
          <h2>Item Total {formattedSum}</h2>
        </div>
      </div>
    </div>
  );

}

export default CartSummary;
