import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      creditCardNumber: null,
      address: null,
      zipCode: null,
      city: null,
      state: null,
      formErrors: {
        name: '',
        creditCardNumber: '',
        address: '',
        zipCode: '',
        city: '',
        state: ''
      }
    };
    this.formValid = this.formValid.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  formValid(formErrors) {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false); // makes valid false if length greater than 0
    });
    return valid;
  }

  changeHandler(event) {
    event.preventDefault();
    const id = event.target.id;
    const value = event.target.value;
    const creditCardRegex = /^[0-9]{16}$/;
    const addressRegex = /[A-Za-z0-9]/;
    const zipRegex = /^[0-9]{5}$/;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'name':
        formErrors.name = value.length < 2
          ? 'Minimum 2 characters required'
          : '';
        break;
      case 'creditCardNumber':
        formErrors.creditCardNumber = creditCardRegex.test(value)
          ? ''
          : 'Invalid credit card number';
        break;
      case 'address':
        formErrors.address = addressRegex.test(value)
          ? ''
          : 'Invalid address';
        break;
      case 'zipCode':
        formErrors.zipCode = zipRegex.test(value)
          ? ''
          : 'Invalid zip';
        break;
      case 'city':
        formErrors.city = value.length < 2
          ? 'Minimum 2 characters required'
          : '';
        break;
      case 'state':
        formErrors.state = value.length < 6
          ? 'Minimum 6 characters required'
          : '';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [id]: value });
    // this.setState({
    //   [event.target.id]: event.target.value
    // });
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
    const { formErrors } = this.state;
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
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control" id="name" placeholder="name" onChange={this.changeHandler}></input>
              {formErrors.name.length > 0 && (
                <span className="text-danger">{formErrors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="creditCard">Credit Card</label>
              <input type="text" className="form-control" id="creditCardNumber" placeholder="#" onChange={this.changeHandler}></input>
              {formErrors.creditCardNumber.length > 0 && (
                <span className="text-danger">{formErrors.creditCardNumber}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" placeholder="Address" onChange={this.changeHandler}></input>
              {formErrors.address.length > 0 && (
                <span className="text-danger">{formErrors.address}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="zipCode">Zip Code</label>
              <input type="text" className="form-control" id="zipCode" placeholder="#" onChange={this.changeHandler}></input>
              {formErrors.zipCode.length > 0 && (
                <span className="text-danger">{formErrors.zipCode}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" className="form-control" id="city" placeholder="" onChange={this.changeHandler}></input>
              {formErrors.city.length > 0 && (
                <span className="text-danger">{formErrors.city}</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input type="text" className="form-control" id="state" placeholder="" onChange={this.changeHandler}></input>
              {formErrors.state.length > 0 && (
                <span className="text-danger">{formErrors.state}</span>
              )}
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
