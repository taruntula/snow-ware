import React from 'react';

function RemoveModal(props) {

  return (
    <div className="modal fade" id={props.modalId} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <img className="img-fluid h-100" src={`../../images/${props.image}`} alt="" />
              </div>
              <div className="col-8">
                <h3>{props.name}</h3>
                <h6>Quantity: {props.quantity}</h6>
                <h6>{props.price}</h6>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button onClick={() => props.remove(parseInt(props.id))} type="button" className="btn btn-danger" data-dismiss="modal">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemoveModal;
