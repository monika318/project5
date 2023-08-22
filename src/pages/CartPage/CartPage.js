import React, { useState, useEffect, useContext } from 'react'
import styles from './CartPage.module.css'
import Button from '../../components/Button/Button'
import TopBanner from '../../components/TopBanner/TopBanner'
import { BsCart3 } from 'react-icons/bs'
// import products from '../../Product.json'
import { IconContext } from 'react-icons'
import { ShopContext } from '../../context/ShopContext'
import PRODUCTS from '../../Products'


const CartPage = () => {
    const { getTotalCartAmount, cartItems, CancelProductFromCart } = useContext(ShopContext);
    const [isCartEmpty, setisCartEmpty] = useState(true)
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
    // const [selectedProducts, setSelectedProducts] = useState([]);
    // const [isCartEmpty, setisCartEmpty] = useState(true); //storedKey
    // const [storedKey, setStoredKey] = useState([]);
    // useEffect(() => {
    //     const storedKeysString = localStorage.getItem('cartKey');
    //     setStoredKey(storedKeysString ? JSON.parse(storedKeysString) : [])
    // }, [])

    // useEffect(() => {
    //     const selected = products.filter(product => storedKey.includes(product.id));
    //     setSelectedProducts(selected)
    //     setisCartEmpty(storedKey.length === 0)
    // }, [storedKey]);

    // const handleProductCancel = (id) => {
    //     // Remove the canceled product from selectedProducts
    //     const updatedProducts = selectedProducts.filter(product => product.id !== id);
    //     setSelectedProducts(updatedProducts);
    //     // Update the local storage or other necessary actions
    //     const updatedKeys = updatedProducts.map(product => product.id);
    //     localStorage.setItem('cartKey', JSON.stringify(updatedKeys));
    //     //update the key
    //     const storedKeysString = localStorage.getItem('cartKey');
    //     setStoredKey(storedKeysString ? JSON.parse(storedKeysString) : [])
    // };
    return (
        <div className={styles.CartPage}>
            <TopBanner Pagename='Your Shopping Cart' PageLink='/cart' />
            {/* <div className={styles.OuterCart}> */}
            {isCartEmpty &&
                <div className={styles.CartEmpty}>
                    <IconContext.Provider value={{ size: '7%' }}>
                        <BsCart3 />
                    </IconContext.Provider>
                    <h1>No Items in cart</h1>
                    <p>Add Items you want to shop</p>
                    <Button name='Start Shopping' action='/shop' widthProp="15%" />
                </div>}

            {!isCartEmpty && <div className={styles.CartDiv}>
                <div className={styles.ItemList}>
                    <h1>Products</h1>
                    {PRODUCTS.map((product, index) => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <div className={styles.Card} key={index}>
                                    <div className={styles.CancelButton} onClick={() => CancelProductFromCart(product.id)}>&#10006;</div>
                                    <div className={styles.CardImage}>
                                        <img src={product.img} alt="image2" />
                                    </div>
                                    <div className={styles.CardText}>
                                        <h2>{product.name}</h2>
                                        <p>Price : {product.price}</p>
                                        <p>Size : {product.size}</p>
                                        <p>Total : {cartItems[product.id]} x ${product.price} = ${cartItems[product.id] * product.price}</p>
                                    </div>
                                </div>
                            )
                        }
                        else {
                            return <></>
                        }
                    })}
                </div>
                <div className={styles.OrderSummary}>
                    <h1>Order Summary</h1>
                    <p><strong>Subtotal : {totalAmount}</strong></p>
                    <h5>Shipping, taxes, and discounts will be calculated at checkout.</h5>
                    <Button name='Proceed to Checkout' action='/checkout101' widthProp="70%" />
                    <Button name='Getting Shipping Estimates' widthProp="70%" />
                </div>
            </div>}

            {/* </div> */}
        </div>

    )
}

export default CartPage
// eslint-disable-next-line 
{/* {!isCartEmpty &&
                <div className={styles.CartDiv}>
                    <div className={styles.ItemList}>
                        <h1>Products</h1>
                        {selectedProducts.map((item, index) => {
                            return (
                                <div className={styles.Card} key={index}>
                                    <div className={styles.CancelButton} onClick={() => CancelProductFromCart(item.id)}>&#10006;</div>
                                    <div className={styles.CardImage}>
                                        <img src={item.img} alt="image2" />
                                    </div>
                                    <div className={styles.CardText}>
                                        <h2>{item.name}</h2>
                                        <p>Price : {item.price}</p>
                                        <p>Size : {item.size}</p>
                                        <p>Total : </p>
                                    </div>
                                </div>
                            )
                        })}
                        <Button name='Continue Shopping' action='/shop' widthProp="50%" />
                    </div>
                    <div className={styles.OrderSummary}>
                        <h1>Order Summary</h1>
                        <p><strong>Subtotal : $1000</strong></p>
                        <h5>Shipping, taxes, and discounts will be calculated at checkout.</h5>
                        <Button name='Proceed to Checkout' action='/checkout101' widthProp="70%" />
                        <Button name='Getting Shipping Estimates' widthProp="70%" />
                    </div>
                </div>
            } */}