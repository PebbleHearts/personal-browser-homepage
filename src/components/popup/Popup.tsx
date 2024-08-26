import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './index.css'

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Popup: React.FC<PopupProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        {children}
        <button className="popup-close" onClick={onClose}>
          &times;
        </button>
      </div>
    </div>,
    document.body // Render into the body element
  );
};

export default Popup;