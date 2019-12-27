import React from 'react';
import ProductListItem from './product-list-item';

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(productsArray => {
        this.setState({
          products: productsArray
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }
  componentDidMount() {
    this.getProducts();
  }
  render() {
    const allProducts = this.state.products;
    return (
      <div className="row">
        {allProducts.map(singleProduct => {
          return <ProductListItem key={singleProduct.id} id={singleProduct.id} name={singleProduct.name} image={singleProduct.images[0]} price={singleProduct.price} description={singleProduct.shortDescription} newView={this.props.view}/>;
        })}
      </div>
    );
  }
}

export default ProductList;
