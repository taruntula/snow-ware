import React from 'react';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCardNumber: '',
      address: '',
      zipCode: '',
      city: '',
      state: '',
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

  formValid({ formErrors, ...rest }) {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
    return valid;
  }

  changeHandler(event) {
    event.preventDefault();
    const id = event.target.id;
    let value = event.target.value;
    const creditCardRegex = /^[0-9]{16}$/;
    const addressRegex = /[A-Za-z0-9]{5,}/;
    const zipRegex = /^[0-9]{5}$/;
    const cityRegex = /[A-Za-z]{3,}$/;
    const nameRegex = /^[A-Za-z]{5,}/;
    const stateRegex = /^[A-Za-z]{6,}/;
    let formErrors = this.state.formErrors;
    switch (id) {
      case 'name':
        formErrors.name = nameRegex.test(value)
          ? ''
          : 'Minimum 5 letters required';
        break;
      case 'creditCardNumber':
        value = value.replace(/([^0-9])/, '');
        formErrors.creditCardNumber = creditCardRegex.test(value)
          ? ''
          : 'Invalid credit card number';
        break;
      case 'address':
        formErrors.address = addressRegex.test(value)
          ? ''
          : 'Minimum 5 characters required';
        break;
      case 'zipCode':
        formErrors.zipCode = zipRegex.test(value)
          ? ''
          : 'Invalid zip';
        break;
      case 'city':
        value = value.replace(/([^A-Za-z])/, '');
        formErrors.city = cityRegex.test(value)
          ? ''
          : 'Minimum 3 characters required';
        break;
      case 'state':
        formErrors.state = stateRegex.test(value)
          ? ''
          : 'Minimum 6 letters required';
        break;
      default:
        break;
    }
    this.setState({ formErrors, [id]: value });
  }
  submitHandler(event) {
    event.preventDefault();
    const address = `${this.state.address} ${this.state.city} ${this.state.state} ${this.state.zipCode}`;
    const { name, creditCardNumber } = this.state;
    const newOrder = {
      name: name,
      creditCardNumber: creditCardNumber,
      address: address
    };
    this.props.onSubmit(newOrder);
  }
  render() {
    const { formErrors } = this.state;
    const { total } = this.props;
    const formattedTotal = '$' + (total / 100 + 20).toFixed(2);
    return (
      <div className="container alata-font">
        <div className="row">
          <h1>Checkout</h1>
        </div>
        <div className="row">
          <h4>Order Total: {formattedTotal}</h4>
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
              <input type="text" value={this.state.creditCardNumber} className="form-control" id="creditCardNumber" placeholder="#" maxLength={16} onChange={this.changeHandler}></input>
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
            <div className="form-row mb-3">
              <div className="col-4">
                <label htmlFor="city">City</label>
                <input type="text" value={this.state.city} className="form-control" id="city" placeholder="City" onChange={this.changeHandler}></input>
                {formErrors.city.length > 0 && (
                  <span className="text-danger">{formErrors.city}</span>
                )}
              </div>
              <div className="col-4">
                <label htmlFor="state">State</label>
                <input type="text" className="form-control" id="state" placeholder="State" onChange={this.changeHandler}></input>
                {formErrors.state.length > 0 && (
                  <span className="text-danger">{formErrors.state}</span>
                )}
              </div>
              <div className="col-4">
                <label htmlFor="zipCode">Zip Code</label>
                <input type="text" className="form-control" id="zipCode" placeholder="#" onChange={this.changeHandler}></input>
                {formErrors.zipCode.length > 0 && (
                  <span className="text-danger">{formErrors.zipCode}</span>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-9 col-md-9 col-6">
                <button onClick={() => this.props.view('cart', {})} className="btn btn-primary">View Cart</button>
              </div>
              <div className="col-lg-3 col-md-3 col-6 d-flex justify-content-end">
                {this.formValid(this.state) ? <button id="checkoutButton" type="submit" className="btn btn-success">Place Order</button> : <button type="button" className="btn btn-danger">Complete Form</button>}
              </div>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckoutForm;
