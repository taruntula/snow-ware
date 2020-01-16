import React from 'react';
import CartSummaryItem from './cart-summary-item';

function CartSummary(props) {
  const cartArray = props.cart;
  const subtotal = props.total;
  const total = props.total + 2000;
  const formattedSubtotal = '$' + (subtotal / 100).toFixed(2);
  const formattedTotal = '$' + (total / 100).toFixed(2);

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
      <div className="container h-100 alata-font">
        <div className="row mt-2">
          <button onClick={() => props.view('catalog', {})} className="btn btn-link">
            <h6> Back to catalog</h6>
          </button>
        </div>
        <div className="row ml-1 mb-2">
          <div className="col-8 pr-5 h-100">
            <h2>Cart</h2>
            <div className="col-12 mb-2">
              {cartArray.map(singleCartItem => {
                return <CartSummaryItem key={singleCartItem.id} image={singleCartItem.images} name={singleCartItem.name} price={singleCartItem.price} description={singleCartItem.shortDescription} />;
              })}
            </div>
          </div>
          <div className="col-4 d-flex flex-column">
            <div className="row">
              <div className="col-6">
                <h3>Summary</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr/>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h5>SUBTOTAL:</h5>
              </div>
              <div className="col-6 text-right">
                <h5>{formattedSubtotal}</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <h6>Shipping:</h6>
              </div>
              <div className="col-2" style={{ color: 'orange' }}>
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="col-6 text-right">
                <h5>$10.00</h5>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-4">
                <h6>Tax:</h6>
              </div>
              <div className="col-2" style={{ color: 'orange' }}>
                <i className="fas fa-question-circle"></i>
              </div>
              <div className="col-6 text-right">
                <h5>$10.00</h5>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <hr />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-6">
                <h2>TOTAL: </h2>
              </div>
              <div className="col-6 text-right">
                <h5>{formattedTotal}</h5>
              </div>
            </div>
            <div className="row justify-content-center mt-2">
              <div className="col-10 text-center">
                <button className="btn btn-light btn-lg btn-block" onClick={() => props.view('checkout', {})}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartSummary;
