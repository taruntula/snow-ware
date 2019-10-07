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
        {/* use map to do this later when you get backend data */}
        {allProducts.map(singleProduct => {
          return <ProductListItem key={singleProduct.id} name={singleProduct.name} image={singleProduct.image} price={singleProduct.price} description={singleProduct.shortDescription} />;
        })}
        {/* <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem />
        <ProductListItem /> */}
      </div>
    );
  }
}

export default ProductList;
