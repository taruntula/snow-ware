import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCardNumber: '',
      address: ''
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  changeHandler(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  submitHandler(event) {
    event.preventDefault();
    const newOrder = {
      name: this.state.name,
      creditCardNumber: this.state.creditCardNumber,
      address: this.state.address
    };
    this.props.onSubmit(newOrder);
  }
  render() {
    return (
      <div className="container ubuntu-font">
        <div className="row">
          <h1>Checkout</h1>
        </div>
        <div className="row">
          <h4>Order Total: {this.props.total}</h4>
        </div>
        <div className="row">
          <form onSubmit={this.submitHandler} className="col-12">
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Name</label>
              <input type="text" className="form-control" id="name" placeholder="name" onChange={this.changeHandler}></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Credit Card</label>
              <input type="text" className="form-control" id="creditCardNumber" placeholder="#" onChange={this.changeHandler}></input>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Shipping Address</label>
              <textarea className="form-control" id="address" rows="3" onChange={this.changeHandler}></textarea>
            </div>
            <div className="row">
              <div className="col-9">
                <button onClick={() => this.props.view('catalog', {})} className="btn btn-link">Continue Shopping</button>
              </div>
              <div className="col-3">
                <button id="checkoutButton" type="submit" className="btn btn-success">Place Order</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
