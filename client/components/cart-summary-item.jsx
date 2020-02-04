import React from 'react';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0
    };
  }

  componentDidMount() {
    this.setState({
      quantity: this.props.count
    });
  }
  changeQuantity(addOrMinus) {
    let bodyObj = {};
    bodyObj['id'] = this.props.id;
    bodyObj['addOrMinus'] = addOrMinus;
    let newCount = parseInt(this.state.quantity);
    if (addOrMinus === 'add') {
      newCount += 1;
    } else {
      newCount -= 1;
    }
    fetch('/api/cart.php', {
      method: 'PATCH',
      body: JSON.stringify(bodyObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(data => {
        this.setState({
          quantity: newCount
        });
      })
      .catch(error => console.error('Fetch failed', error));
  }
  render() {
    const name = this.props.name;
    // const id = this.props.id;
    const image = this.props.image;
    // const quantity = this.props.count;
    const description = this.props.description;
    const price = this.props.price * this.state.quantity;
    const formattedPrice = '$' + (price / 100).toFixed(2);
    return (
      <div className="row mb-2">
        <div className="col-3 cart-height d-flex justify-content-center flex-column">
          <img className="img-fluid h-100" src={`../../images/${image}`} alt="" />
        </div>
        <div className="col-9">
          <h3>{name}</h3>
          <h6>Qty <i onClick={() => this.changeQuantity('minus')} className="fas fa-minus-circle"></i> {this.state.quantity} <i onClick={() => this.changeQuantity('add')} className="fas fa-plus-circle"></i></h6>
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
