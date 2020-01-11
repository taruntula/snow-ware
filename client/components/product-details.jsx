import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }

  componentDidMount() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(productArray => {
        const id = this.props.viewParams.id;
        const filteredProduct = productArray.filter(oneProduct => oneProduct.id === id);
        this.setState({
          product: filteredProduct
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  render() {
    if (this.state.product === null) {
      return null;
    } else {
      return (
        <div className="container alata-font">
          <div className="row mt-2">
            <button onClick={() => this.props.view('catalog', {})} className="btn btn-link">
              <h6> Back to catalog</h6>
            </button>
          </div>
          <div className="mt-2 row h-50 align-items-center">
            <div className="col-6">
              <img className="img-fluid" src={`../../images/${this.state.product[0].images[0]}`} alt="" />
            </div>
            <div className="col-6 text-center">
              <h3>{this.state.product[0].name}</h3>
              <h6>{(this.state.product[0].price / 100).toFixed(2)}</h6>
              <p>{this.state.product[0].shortDescription}</p>
              <button className="btn btn-success" onClick={() => this.props.addToCart(this.state.product[0])}>Add to Cart</button>
            </div>
          </div>
          <div className="row mt-3">
            <p>{this.state.product[0].longDescription}</p>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
