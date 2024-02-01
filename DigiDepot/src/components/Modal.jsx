

export const Modal = ( { isOpen, onBack } ) => {
    
    if (!isOpen) {
        return null; 
      }
    
      return (
        <div className="modal-bg">
          <div className="modal">
            <p className="modal-message">Successfull!</p>
            <div className="container">
              <button className="btn-show" onClick={onBack}>Back</button>
            </div>
          </div>
        </div>
      );
    };
    