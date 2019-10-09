import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
  }

  setView(name, params) {
    this.setState({
      view: { name: name, params: params }
    });
  }

  getCartItems() {
    fetch('/api/dummy-cart-items.json')
      .then(response => response.json())
      .then(cartArray => {
        this.setState({
          cart: cartArray
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  render() {
    if (this.state.view['name'] === 'catalog') {
      return (
        <div className="container">
          <Header />
          <div className="container">
            <ProductList view={this.setView} />
          </div>
        </div>
      );
    } else if (this.state.view['name'] === 'details') {
      return (
        <ProductDetails viewParams={this.state.view['params']} view={this.setView} />
      );
    }
  }
}
