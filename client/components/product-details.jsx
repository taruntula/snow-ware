import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/dummy-product-details.json')
      .then(response => response.json())
      .then(productArray => {
        this.setState({
          product: productArray
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container">
          <div className="row mt-2">
            <button onClick={() => this.props.view('catalog', {})} className="btn btn-link">
              <h6> Back to catalog</h6>
            </button>
          </div>
          <div className="mt-2 row h-50 align-items-center">
            <div className="col-6">
              <img className="img-fluid" src={this.state.product.image} alt="" />
            </div>
            <div className="col-6">
              <h3>{this.state.product.name}</h3>
              <h6>{this.state.product.price}</h6>
              <p>{this.state.product.shortDescription}</p>
              <button className="btn btn-success" onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
            </div>
          </div>
          <div className="row mt-3">
            <p>{this.state.product.longDescription}</p>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
