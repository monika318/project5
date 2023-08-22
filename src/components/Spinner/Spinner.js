import React, { useState } from 'react'
import styles from './Spinner.module.css'

const Spinner = ({ number, setNumber }) => {
    // const [value, setValue] = useState(0);

    // const onNumMinus = () => {
    //     if (value === 0) {
    //         setValue(0)
    //     } else {
    //         setValue(value - 1)
    //     }
    // }

    // const onNumAdd = () => {
    //     setValue(value + 1)
    // }
    // numbers = value
    // { value, onNumMinus, onNumAdd }

    const onNumMinus = () => {
        if (number === 0) {
            setNumber(0)
        } else {
            setNumber(number - 1)
        }
    }
    const onNumAdd = () => {
        setNumber(number + 1)
    }
    return (
        <>
            <div className={styles.spinner}>
                <div className={styles.spinnerElement} onClick={onNumMinus}>-</div>
                <div className={styles.spinnerElement}>{number}</div>
                <div className={styles.spinnerElement} onClick={onNumAdd}>+</div>
            </div>
        </>
    )
}

export default Spinner
