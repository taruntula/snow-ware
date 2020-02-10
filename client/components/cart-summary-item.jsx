import React from 'react';
import RemoveModal from './remove-modal';

class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      disableFlag: false
    };
  }

  componentDidMount() {
    this.props.count <= 1 ? (
      this.setState({
        quantity: this.props.count,
        disableFlag: true
      })
    ) : (
      this.setState({
        quantity: this.props.count,
        disableFlag: false
      })
    );
  }
  changeQuantity(addOrMinus) {
    let newCount = parseInt(this.state.quantity);
    if (addOrMinus === 'add') {
      newCount += 1;
    } else {
      newCount -= 1;
    }
    newCount <= 1 ? (
      this.setState({
        quantity: newCount,
        disableFlag: true
      })
    ) : (
      this.setState({
        quantity: newCount,
        disableFlag: false
      })
    );
    this.props.quantity(this.props.id, addOrMinus);
  }
  render() {
    const name = this.props.name;
    const id = this.props.id;
    const intId = parseInt(id);
    const idObject = { id: intId };
    const image = this.props.image;
    const description = this.props.description;
    const price = this.props.price * this.state.quantity;
    const formattedPrice = '$' + (price / 100).toFixed(2);
    const modalId = '#removeModal' + id;
    const noHashModalId = 'removeModal' + id;
    return (
      <div className="row mb-2">
        <div className="col-3 cart-height d-flex justify-content-center flex-column">
          <img className="img-fluid h-100" src={`../../images/${image}`} alt="" />
        </div>
        <div className="col-9">
          <h3>{name}</h3>
          <h6>Qty <i onClick={() => this.changeQuantity('minus')} className={this.state.disableFlag ? 'fas fa-minus-circle disable-button' : 'fas fa-minus-circle'}></i> {this.state.quantity} <i onClick={() => this.changeQuantity('add')} className="fas fa-plus-circle"></i></h6>
          <h6>{formattedPrice}</h6>
          <p>{description}</p>
          <div className="row">
            <div className="col-4">
              <button type="button" className="btn btn-block btn-secondary" data-toggle="modal" data-target={modalId}>REMOVE</button>
              <>
                <RemoveModal image={image} name={name} description={description} id={id} price={formattedPrice} quantity={this.state.quantity} remove={this.props.remove} modalId={noHashModalId}/>
              </>
            </div>
            <div className="col-4 pl-0">
              <button type="button" onClick={() => this.props.view('details', idObject)} className="btn btn-block btn-secondary">DETAILS</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default CartSummaryItem;
