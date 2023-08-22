import React, { useContext, useEffect, useState } from 'react'
import styles from './Cart.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { ShopContext } from '../../context/ShopContext'
import PRODUCTS from '../../Products'
import { useNavigate } from 'react-router-dom'


const Cart = (props) => {
    const [isCartEmpty, setisCartEmpty] = useState(true)
    const navigate = useNavigate();
    const { addToCart, getTotalCartAmount, cartItems, removeFromCart, updateCartItemCount, CancelProductFromCart } = useContext(ShopContext);
    const handleCartClose = () => {
        props.setShowCart(false)
    }
    const totalAmount = getTotalCartAmount();
    useEffect(() => {
        let allItemsZero = true;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                allItemsZero = false;
                break; // No need to continue checking, as we found a non-zero value
            }
        }
        setisCartEmpty(allItemsZero);
    }, [cartItems])
    const handleCheckout = () => {
        props.setShowCart(false)
        navigate('/checkout101')
    }
    const handleViewCart = () => {
        props.setShowCart(false)
        navigate('/cart')
    }
    return (
        <div className={styles.modalContainer} onClick={(e) => {
            if (e.target.classList.contains(styles.modalContainer)) {
                handleCartClose();
            }
        }} >
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

            {PRODUCTS.map((product, index) => {
                if (cartItems[product.id] !== 0) {
                    return (
                        <div key={index}>
                            <div className={styles.Card} >
                                <div className={styles.CardCloseButton} onClick={() => CancelProductFromCart(product.id)}>
                                    <AiOutlineClose />
                                </div>
                                <div className={styles.image}>
                                    <img src={product.img} alt="image1" />
                                </div>
                                <div className={styles.text}>
                                    <h4>{product.name}</h4>
                                    <p>Color: Blue</p>
                                    <p>${product.price}</p>
                                    <div className={styles.countHandler}>
                                        <button onClick={() => removeFromCart(product.id)}> - </button>
                                        <input value={cartItems[product.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)} />
                                        <button onClick={() => addToCart(product.id)}> + </button>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </div>
                    )
                }
                else {
                    return <p></p>
                }
            })}
            <div className={!isCartEmpty ? styles.TotalAmount : styles.hide}>

                <div className={styles.Amount}>
                    <h5>Total</h5>
                    <h5>${totalAmount}</h5>
                </div>
                <hr />
            </div>
            <div className={!isCartEmpty ? styles.footer : styles.hide}>
                <p>Shipping, taxes, and discounts will be calculated at checkout</p>
                <button onClick={() => handleCheckout()}>Proceed to Checkout</button>
                <button onClick={() => handleViewCart()}>ViewCart</button>
            </div>

        </div>
    )
}

export default Cart
