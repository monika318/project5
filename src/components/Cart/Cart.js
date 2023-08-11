import React, { useState, useEffect } from 'react'
import styles from './Cart.module.css'
import image from '../../images/product1.jpg'
import { AiOutlineClose } from 'react-icons/ai'
import products from '../../Product.json'
import Spinner from '../Spinner/Spinner'

const Cart = (props) => {
    const [value, setValue] = useState(0);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isCartEmpty, setisCartEmpty] = useState(true);
    const price = 10

    // useEffect(() => {
    //     const selected = products.filter(product => storedKeys.includes(product.id));
    //     setSelectedProducts(selected);
    //     // Check if the existingCartKeys array is empty
    //     setisCartEmpty(selected.length === 0)
    // }, []);
    useEffect(() => {
        const storedKeysString = localStorage.getItem('cartKey');
        const storedKeys = storedKeysString ? JSON.parse(storedKeysString) : [];
        const selected = products.filter(product => storedKeys.includes(product.id));
        setSelectedProducts(selected);
        // Check if the existingCartKeys array is empty
        setisCartEmpty(selected.length === 0)
    }, [selectedProducts, props]);

    const handleNumMinus = () => {
        if (value === 0) {
            setValue(0)
        } else {
            setValue(value - 1)
        }
    }
    const handleNumAdd = () => {
        setValue(value + 1)
    }
    const handleCartClose = () => {
        props.setShowCart(false)
    }

    const handleProductCancel = (id) => {
        // Remove the canceled product from selectedProducts
        const updatedProducts = selectedProducts.filter(product => product.id !== id);
        setSelectedProducts(updatedProducts);

        // Update the local storage or other necessary actions
        const updatedKeys = updatedProducts.map(product => product.id);
        localStorage.setItem('cartKey', JSON.stringify(updatedKeys));
    };



    return (
        <>
            {/* <div className={styles.SideCart}> */}
            <div className={styles.CloseButton} onClick={handleCartClose}>
                <AiOutlineClose />
            </div>
            <h2 id={styles.CartH2}>Your Cart</h2>

            <hr />
            <div className={isCartEmpty ? styles.EmptyCart : styles.hide}>
                <p>Your Cart is Currently Empty</p>
                <button onClick={handleCartClose} >Continue Shopping</button>
            </div>
            {selectedProducts.map((item) => {
                const numbers = 0;
                return (<>
                    <div className={styles.Card}>
                        <div className={styles.CardCloseButton} onClick={() => handleProductCancel(item.id)}>
                            <AiOutlineClose />
                        </div>
                        <div className={styles.image}>
                            <img src={item.img} alt="image1" />
                        </div>
                        <div className={styles.text}>
                            <h3>{item.name}</h3>
                            <h6>Color: Blue</h6>
                            <h5>${item.price}</h5>
                            <Spinner
                                // value={value}
                                // onNumMinus={handleNumMinus}
                                // onNumAdd={handleNumAdd}
                                numbers={numbers}
                            />
                        </div>
                    </div>
                    <hr />
                </>
                )
            })}
            <div className={!isCartEmpty ? styles.TotalAmount : styles.hide}>
                {/* <hr /> */}
                <div className={styles.Amount}>
                    <h5>Total</h5>
                    <h5>${value * price}</h5>
                </div>
                <hr />
            </div>
            <div className={!isCartEmpty ? styles.footer : styles.hide}>
                <p>Shipping, taxes, and discounts will be calculated at checkout</p>
                <button >Proceed to Checkout</button>
                <button >ViewCart</button>
            </div>
            {/* // </div> */}
        </>
    )
}

export default Cart
