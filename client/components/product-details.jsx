import React from 'react';
import DetailsModal from './details-modal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

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
          <div className="mt-2 row h-50 justify-content-center">
            <div className="col-lg-8 col-md-8 col-sm-12 text-center d-flex justify-content-center">
              <Carousel showStatus={false} axis="vertical" width="46vh">
                <div>
                  <img src={`../../images/${this.state.product[0].images[0]}`} />
                </div>
                <div>
                  <img src={`../../images/${this.state.product[0].images[1]}`} />
                </div>
                <div>
                  <img src={`../../images/${this.state.product[0].images[2]}`} />
                </div>
              </Carousel>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
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
                  <p>{this.state.product[0].longDescription}</p>
                </div>
              </div>
              <div className="row mt-3 mb-3">
                <div className="col">
                  <button onClick={() => this.props.addToCart(this.state.product[0])} type="button" className="btn btn-block btn-secondary" data-toggle="modal" data-target="#detailsModal">Add to Cart</button>
                  <>
                    <DetailsModal image={`../../images/${this.state.product[0].images[0]}`} name={this.state.product[0].name} description={this.state.product[0].shortDescription} id={this.state.product[0].id} price={'$' + (this.state.product[0].price / 100).toFixed(2)} view={this.props.view} modalId="detailsModal" />
                  </>
                </div>
                <div className="col">
                  <button onClick={() => this.props.view('cart', {})} type="button" className="btn btn-block btn-secondary">View Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default ProductDetails;
