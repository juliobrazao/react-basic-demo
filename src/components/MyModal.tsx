import { useContext } from "react";
import { AppContext } from "../App.context";

const MyModal = () => {
  
  const { showModal, handleToggleModal } = useContext(AppContext);

  return (
    <div>
      {showModal && (
        <div className={`modal${showModal ? ' fade show' : ''}`} tabIndex={-1} role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">My Modal</h5>
              </div>
              <div className="modal-body">
                <p>Modal content goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleToggleModal}>
                  Close
                </button>
                {/* Additional buttons or actions can be added here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
