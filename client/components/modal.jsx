import React from 'react';

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      id: null,
      image: '',
      quantity: null,
      description: '',
      price: null
    };
  }
  componentDidMount() {
    let { name, id, image, quantity, description, price } = this.props;
    this.setState({
      name: name,
      id: parseInt(id),
      image: image,
      quantity: quantity,
      description: description,
      price: price
    });
  }
  render() {
    // const name = props.name;
    // const id = props.id;
    // const intId = parseInt(id);
    // const image = props.image;
    // const quantity = props.quantity;
    // const description = props.description;
    // const price = props.price;
    return (
      <div className="modal fade" id={this.props.modalId} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Remove from Cart?</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-4 cart-height">
                  <img className="img-fluid h-100" src={`../../images/${this.state.image}`} alt="" />
                </div>
                <div className="col-8">
                  <h3>{this.state.name}</h3>
                  <h6>Quantity: {this.state.quantity}</h6>
                  <h6>{this.state.price}</h6>
                  <p>{this.state.description}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button onClick={() => this.props.remove(this.state.id)} type="button" className="btn btn-danger" data-dismiss="modal">Remove</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
