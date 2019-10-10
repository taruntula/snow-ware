import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cartArray => {
        this.setState({
          cart: cartArray
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  componentDidMount() {
    this.getCartItems();
  }

  addToCart(product) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/dummy-cart-items.json', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: myHeaders
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          cart: this.state.cart.concat(product)
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  render() {
    if (this.state.view['name'] === 'catalog') {
      return (
        <div className="container">
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <div className="container">
            <ProductList view={this.setView} />
          </div>
        </div>
      );
    } else if (this.state.view['name'] === 'details') {
      return (
        <ProductDetails viewParams={this.state.view['params']} view={this.setView} addToCart={this.addToCart} />
      );
    } else if (this.state.view['name'] === 'cart') {
      return (
        <CartSummary cart={this.state.cart} view={this.setView} />
      );
    }
  }
}
