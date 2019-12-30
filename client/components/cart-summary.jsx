import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const cartArray = props.cart;
  const total = props.total;
  if (cartArray.length === 0) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1>Cart is Empty</h1>
        </div>
      </div>

    );
  } else {
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
            return <CartSummaryItem key={singleCartItem.id} image={singleCartItem.images} name={singleCartItem.name} price={singleCartItem.price} description={singleCartItem.shortDescription} />;
          })}
        </div>
        <div className="col-12 mt-6">
          <div className="row">
            <div className="col-9">
              <h2>Item Total {total}</h2>
            </div>
            <div className="col-3">
              <button className="btn btn-light" onClick={() => props.view('checkout', {})}>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
