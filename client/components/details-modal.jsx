import React from 'react';

function DetailsModal(props) {
  const id = props.id;
  const intId = parseInt(id);
  const idObject = { id: intId };
  return (
    <div className="modal fade" id={props.modalId} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Added to Cart</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12 text-center modal-height">
                <img className="img-fluid h-100" src={`../../images/${props.image}`} alt="" />
              </div>
              <div className="col-lg-8 col-md-8 col-12 text-center">
                <h3>{props.name}</h3>
                <h6>{props.price}</h6>
                <p>{props.description}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => props.view('cart', idObject)} type="button" className="btn btn-warning" data-dismiss="modal">Cart</button>
            <button onClick={() => props.view('catalog', idObject)} type="button" className="btn btn-dark" data-dismiss="modal">Catalog</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;
