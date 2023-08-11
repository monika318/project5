import React from 'react'
import styles from './Card.module.css'
import * as  AiIcons from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';


const Card = (props) => {
    const { item, setShowCart } = props;
    const navigate = useNavigate();

    const handleAddToCart = (id) => {
        // console.log(JSON.stringify(id))
        setShowCart(true);
        const existingCartKeysString = localStorage.getItem('cartKey');
        let existingCartKeys = [];

        if (existingCartKeysString) {
            try {
                existingCartKeys = JSON.parse(existingCartKeysString);
                if (!Array.isArray(existingCartKeys)) {
                    existingCartKeys = [];
                }
            } catch (error) {
                console.error('Error parsing existingCartKeys:', error);
                existingCartKeys = [];
            }
        }
        // Add the new key to the array
        existingCartKeys.push(id);
        // Store the updated array of keys in local storage
        localStorage.setItem('cartKey', JSON.stringify(existingCartKeys));
    }
    const handleImageOnClick = (id) => {
        // console.log(id)       
        navigate(`/product/${id}`);
    }
    return (
        <>
            <div className={styles.card} >
                <div className={styles.cardImage}>
                    <img src={item.img} alt="product1" />
                    <div className={styles.overlay} onClick={() => handleImageOnClick(item.id)}>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.Icons} onClick={() => handleAddToCart(item.id)}>
                            <AiIcons.AiOutlineShoppingCart />
                        </div>
                        <div className={styles.v1}></div>
                        <div className={styles.Icons}>
                            <AiIcons.AiOutlineStar />
                        </div>
                        <div className={styles.v1}></div>
                        <div className={styles.Icons}>
                            <AiIcons.AiOutlineSearch />
                        </div>
                    </div>
                </div>
                <div className={styles.cardBody} >
                    <h2>{item.name}</h2>
                    <p>
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                    </p>
                    <p>{item.price}</p>
                    {/* {props.description && <p style={{ width: '80%', textAlign: 'center' }}>{item.description}</p>} */}
                </div>
            </div>
        </>
    )
}

export default Card
