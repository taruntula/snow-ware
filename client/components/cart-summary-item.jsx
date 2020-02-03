import React from 'react';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const name = this.props.name;
    // const id = this.props.id;
    const image = this.props.image;
    const quantity = this.props.count;
    const description = this.props.description;
    const price = this.props.price * quantity;
    const formattedPrice = '$' + (price / 100).toFixed(2);
    return (
      <div className="row mb-2">
        <div className="col-3 cart-height d-flex justify-content-center flex-column">
          <img className="img-fluid h-100" src={`../../images/${image}`} alt="" />
        </div>
        <div className="col-9">
          <h3>{name}</h3>
          <h6>Qty <i className="fas fa-minus-circle"></i> {quantity} <i className="fas fa-plus-circle"></i></h6>
          <h6>{formattedPrice}</h6>
          <p>{description}</p>
          <div className="row">
            <div className="col-4">
              <button className="btn btn-block btn-secondary">REMOVE</button>
            </div>
            <div className="col-4 pl-0">
              <button className="btn btn-block btn-secondary">EDIT</button>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default CartSummaryItem;
