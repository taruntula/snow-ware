import React from 'react';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      bigPic: ''
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

              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="text-center details-height img-fluid" src={`../../images/${this.state.product[0].images[0]}`} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="text-center details-height img-fluid" src={`../../images/${this.state.product[0].images[1]}`} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="text-center details-height img-fluid" src={`../../images/${this.state.product[0].images[2]}`} alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev btn-dark" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next btn-dark" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              {/* <img className="img-fluid details-height" src={`../../images/${this.state.product[0].images[0]}`} alt="" /> */}
            </div>
            <div className="col-4 text-center">
              <div className="row">
                <div className="col">
                  <h1>{this.state.product[0].name}</h1>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <h3>{'$' + (this.state.product[0].price / 100).toFixed(2)}</h3>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <p>{this.state.product[0].shortDescription}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <button className="btn btn-lg btn-secondary" onClick={() => this.props.addToCart(this.state.product[0])}>Add to Cart</button>
                </div>
              </div>
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
