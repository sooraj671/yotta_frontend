import React from 'react';
import '../customeModal.css'; // Import the custom CSS for the modal

const CustomModal = ({ show, onClose, children }) => {
  if (!show) return null; // Don't render anything if show is false

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {children} {/* Render any child elements inside the modal */}
      </div>
    </div>
  );
};

export default CustomModal;