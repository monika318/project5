import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ onSubmit, onClose, onCancel, children, widthProp }) => {
    return (
        <div className={styles.modalContainer} onClick={(e) => {
            if (e.target.classList.contains(styles.modalContainer)) {
                onClose("the modal was closed");
            }
        }} >
            <div className={styles.modal} style={{ width: widthProp }}>
                <div className={styles.modalHeader}>
                    <p className={styles.close} onClick={() => onClose("the modal was closed")}>&times;</p>
                </div>
                <div className={styles.modalContent}>
                    {children}
                </div>
                <div className={styles.modalFooter}>
                </div>
            </div>
        </div>

    )
}

export default Modal
