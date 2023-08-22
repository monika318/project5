import React from 'react'
import styles from './Button.module.css'
import { useNavigate } from 'react-router-dom';

const Button = (props) => {
    const { name, action, widthProp } = props;
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(action);
    }
    return (
        <button style={{ width: widthProp }} className={styles.Button} onClick={handleButtonClick}>
            {name}
        </button>
    )
}

export default Button
