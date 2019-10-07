import React from 'react';
import Header from './header';
import ProductListItem from './product-list-item';

export default class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <div className="container">
          <div className="row">
            <ProductListItem />
          </div>
        </div>
      </div>
    );
  }
}
