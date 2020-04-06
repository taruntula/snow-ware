import React from 'react';

function DisclaimerModal(props) {
  return (
    <div className="modal fade show" style={{ display: 'block' }} id="disclaimerModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">Disclaimer <i className="fas fa-exclamation-triangle" style={{ color: 'orange' }}></i></h5>

          </div>
          <div className="modal-body">
            <div className="row p-3">
              <h5>This is a mock e-commerce website. Please do not use any of your real information.</h5>
            </div>
          </div>
          <div className="modal-footer">
            <button onClick={() => props.toggle()} type="button" className="btn btn-warning" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisclaimerModal;
