import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.getCartTotal = this.getCartTotal.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
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
        const newCartArray = cartArray.slice();
        this.setState({
          cart: newCartArray
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }

  componentDidMount() {
    this.getCartItems();
  }

  addToCart(product) {
    let idObj = {};
    idObj['id'] = product.id;
    fetch('/api/cart.php', {
      method: 'POST',
      body: JSON.stringify(idObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.getCartItems();
        // this.setState({
        //   cart: this.state.cart.concat(product)
        // });
      })
      .catch(error => console.error('Fetch failed', error));

  }

  placeOrder(orderObject) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    fetch('/api/orders.php', {
      method: 'POST',
      body: JSON.stringify(orderObject),
      headers: myHeaders
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          view: { name: 'catalog', params: {} },
          cart: []
        });
      })
      .catch(error => console.error('Fetch failed', error));

  }

  getCartTotal() {
    const allCart = this.state.cart.slice(0);
    let sum = 0;
    for (var integerI = 0; integerI < allCart.length; integerI++) {
      sum += parseInt(allCart[integerI].price) * parseInt(allCart[integerI].count);
    }

    // const formattedSum = '$' + (sum / 100).toFixed(2);
    return sum;
  }

  render() {
    if (this.state.view['name'] === 'catalog') {
      return (
        <div className="container-fullwidth black-fade">
          <Header cartItemCount={this.state.cart.length} view={this.setView} />
          <div className="row set-height cool-background flex-column justify-content-center skew">
            <div className="col-6 m-5 justify-content-center text-center quote-font logo">
              {/* <h1>{"If you're not falling, you're not learning"}</h1> */}
            </div>
          </div>
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
        <CartSummary cart={this.state.cart} view={this.setView} total={this.getCartTotal()} />
      );
    } else if (this.state.view['name'] === 'checkout') {
      return (
        <CheckoutForm onSubmit={this.placeOrder} view={this.setView} total={this.getCartTotal()} />
      );
    }
  }
}
