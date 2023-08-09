import React, { useState } from 'react'
import styles from './Spinner.module.css'

const Spinner = ({ value, onNumMinus, onNumAdd }) => {
    // const [value, setValue] = useState(0);

    // const handleNumMinus = () => {
    //     if (value === 0) {
    //         setValue(0)
    //     } else {
    //         setValue(value - 1)
    //     }
    // }
    // const handleNumAdd = () => {
    //     setValue(value + 1)
    // }
    return (
        <>
            <div className={styles.spinner}>
                <div className={styles.spinnerElement} onClick={onNumMinus}>-</div>
                <div className={styles.spinnerElement}>{value}</div>
                <div className={styles.spinnerElement} onClick={onNumAdd}>+</div>
            </div>
        </>
    )
}

export default Spinner
