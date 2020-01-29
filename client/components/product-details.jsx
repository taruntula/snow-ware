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
          <div className="mt-2 row h-50">
            <div className="col-2 d-flex flex-column">
              <div className="row mb-3">
                <div className="col text-center">
                  <img className="img-fluid details-small" src={`../../images/${this.state.product[0].images[1]}`} alt="" />
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <img className="img-fluid details-small" src={`../../images/${this.state.product[0].images[2]}`} alt="" />
                </div>
              </div>
            </div>
            <div className="col-6 text-center">
              <img className="img-fluid details-height" src={`../../images/${this.state.product[0].images[0]}`} alt="" />
            </div>
            <div className="col-4 text-center">
              <h3>{this.state.product[0].name}</h3>
              <h6>{(this.state.product[0].price / 100).toFixed(2)}</h6>
              <p>{this.state.product[0].shortDescription}</p>
              <button className="btn btn-lg btn-secondary" onClick={() => this.props.addToCart(this.state.product[0])}>Add to Cart</button>
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
