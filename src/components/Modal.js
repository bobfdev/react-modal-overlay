import React from 'react'
import '../styles/Modal.css'

function Modal({ closeModal }) {
  return (
    <div className='modal-background'>
        <div className="modal-container">
            <div className="close-button">
            <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="title">
                <h1>Are You Sure You Want To Continue?</h1>
            </div>
            <div className="body">
                <p>This action cannot be undone.</p>
            </div>
            <div className="footer">
                <button 
                    onClick={() => closeModal(false)}
                    id='cancel-button'
                >
                    Cancel
                </button>
                <button>Continue</button>
            </div>
        </div>
    </div>
  )
}

export default Modal