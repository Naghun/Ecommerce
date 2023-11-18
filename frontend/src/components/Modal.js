import React, { useState } from 'react';

function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div>
        <button onClick={openModal}>Otvori Pop-up</button>
        {isOpen && (
            <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>
                </span>
                <p>Ovo je sadržaj modalnog dijaloga.</p>
            </div>
            </div>
        )}
        </div>
    );
}

export default Modal;
