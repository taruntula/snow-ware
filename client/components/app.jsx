import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutForm from './checkout-form';
import DisclaimerModal from './disclaimer-modal';
import { Link, animateScroll as scroll } from 'react-scroll';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: [],
      Modal: true
    };
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeCart = this.removeCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
    this.getCartTotal = this.getCartTotal.bind(this);
    this.getCartCount = this.getCartCount.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.changeQuantity = this.changeQuantity.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
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
      })
      .catch(error => console.error('Fetch failed', error));

  }

  changeQuantity(productId, addOrMinus) {
    let bodyObj = {};
    bodyObj['id'] = productId;
    bodyObj['addOrMinus'] = addOrMinus;
    fetch('/api/cart.php', {
      method: 'PATCH',
      body: JSON.stringify(bodyObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.getCartItems();
      })
      .catch(error => console.error('Fetch failed', error));
  }

  removeCart(productId) {
    let bodyObj = {};
    bodyObj['id'] = productId;
    fetch('/api/cart.php', {
      method: 'DELETE',
      body: JSON.stringify(bodyObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.getCartItems();
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
    return sum;
  }

  getCartCount() {
    const allCart = this.state.cart.slice(0);
    let sum = 0;
    for (var integerI = 0; integerI < allCart.length; integerI++) {
      sum += parseInt(allCart[integerI].count);
    }
    return sum;
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  toggleModal() {
    this.setState({
      Modal: false
    });
  }

  render() {
    if (this.state.view['name'] === 'catalog') {
      return (
        <div className="container-fluid black-fade">
          {this.state.Modal ? <DisclaimerModal toggle={this.toggleModal} /> : null }
          <Header cartItemCount={this.getCartCount()} view={this.setView} scrollTop={this.scrollToTop} />
          <div className="row set-height cool-background justify-content-center">
            <div className="col-5 col-md-4 col-lg-3 d-flex flex-column justify-content-center ml-3 pt-3 mt-5 text-center">
              <Link activeClass="active" className="test1 btn btn-dark btn-lg text-light quote-font hand" to="test1" spy={true} smooth={true} offset={-90} duration={500} >SHOP</Link>
            </div>
          </div>
          <div name="test1" className="container">
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
        <CartSummary cart={this.state.cart} view={this.setView} total={this.getCartTotal()} quantity={this.changeQuantity} remove={this.removeCart} />
      );
    } else if (this.state.view['name'] === 'checkout') {
      return (
        <CheckoutForm onSubmit={this.placeOrder} view={this.setView} total={this.getCartTotal()} />
      );
    }
  }
}
