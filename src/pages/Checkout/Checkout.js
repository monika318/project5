import React, { useContext } from 'react'
import styles from './Checkout.module.css'
import TopBanner from '../../components/TopBanner/TopBanner'
import PRODUCTS from '../../Products'
import { ShopContext } from '../../context/ShopContext'

const Checkout = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext);
    const totalAmount = getTotalCartAmount();
    // const storedKeysString = localStorage.getItem('cartKey');
    // const storedKey = storedKeysString ? JSON.parse(storedKeysString) : []
    // const selected = products.filter(product => storedKey.includes(product.id));

    return (
        <div className={styles.Checkout} style={{ marginTop: '100px' }}>
            <TopBanner Pagename='Checkout' PageLink="/checkout" />
            <div className={styles.InnerCheckout}>
                <div className={styles.FormCheckout}>
                    <form>
                        <div className={styles.contactDiv}>
                            <p><strong>Contact</strong></p>
                            <input type='text' placeholder='Email or mobile phone number'></input>
                        </div>
                        <div className={styles.shippingDiv}>
                            <p><strong>Shipping Address</strong></p>
                            <div className={styles.gridContainer}>
                                <div className={`${styles.gridItem} ${styles.span3}`}>
                                    <input type='text' placeholder='Country' value="Country - United States" />
                                </div>
                                <div className={`${styles.gridItem} ${styles.span3} ${styles.gridgrid}`}>
                                    <div className={`${styles.InnergridItem}`}>
                                        <input type='text' placeholder='First Name' />
                                    </div>
                                    <div className={`${styles.InnergridItem} `}>
                                        <input type='text' placeholder='Last Name' />
                                    </div>
                                </div>
                                <div className={`${styles.gridItem} ${styles.span3}`}>
                                    <input type='text' placeholder='Address' />
                                </div>
                                <div className={`${styles.gridItem} ${styles.span3}`}>
                                    <input type='text' placeholder='Apartment, suite, etc. (optional)' />
                                </div>
                                <div className={styles.gridItem}>
                                    <input type='text' placeholder='City' />
                                </div>
                                <div className={styles.gridItem}>
                                    {/* <input type='text' placeholder='State' /> */}
                                    <select id="stateSelect" name="stateSelect">
                                        <option value="" selected disabled>State</option>
                                        <option value="Alabama">Alabama</option>
                                        <option value="Alaska">Alaska</option>
                                        <option value="Arizona">Arizona</option>
                                        <option value="Arkansas">Arkansas</option>
                                        <option value="California">California</option>
                                        <option value="Colorado">Colorado</option>
                                        <option value="Connecticut">Connecticut</option>
                                        <option value="Delaware">Delaware</option>
                                        <option value="Florida">Florida</option>
                                        <option value="Georgia">Georgia</option>
                                        <option value="Hawaii">Hawaii</option>
                                        <option value="Idaho">Idaho</option>
                                        <option value="Illinois">Illinois</option>
                                        <option value="Indiana">Indiana</option>
                                        <option value="Iowa">Iowa</option>
                                        <option value="Kansas">Kansas</option>
                                        <option value="Kentucky">Kentucky</option>
                                        <option value="Louisiana">Louisiana</option>
                                        <option value="Maine">Maine</option>
                                        <option value="Maryland">Maryland</option>
                                        <option value="Massachusetts">Massachusetts</option>
                                        <option value="Michigan">Michigan</option>
                                        <option value="Minnesota">Minnesota</option>
                                        <option value="Mississippi">Mississippi</option>
                                        <option value="Missouri">Missouri</option>
                                        <option value="Montana">Montana</option>
                                        <option value="Nebraska">Nebraska</option>
                                        <option value="Nevada">Nevada</option>
                                        <option value="New Hampshire">New Hampshire</option>
                                        <option value="New Jersey">New Jersey</option>
                                        <option value="New Mexico">New Mexico</option>
                                        <option value="New York">New York</option>
                                        <option value="North Carolina">North Carolina</option>
                                        <option value="North Dakota">North Dakota</option>
                                        <option value="Ohio">Ohio</option>
                                        <option value="Oklahoma">Oklahoma</option>
                                        <option value="Oregon">Oregon</option>
                                        <option value="Pennsylvania">Pennsylvania</option>
                                        <option value="Rhode Island">Rhode Island</option>
                                        <option value="South Carolina">South Carolina</option>
                                        <option value="South Dakota">South Dakota</option>
                                        <option value="Tennessee">Tennessee</option>
                                        <option value="Texas">Texas</option>
                                        <option value="Utah">Utah</option>
                                        <option value="Vermont">Vermont</option>
                                        <option value="Virginia">Virginia</option>
                                        <option value="Washington">Washington</option>
                                        <option value="West Virginia">West Virginia</option>
                                        <option value="Wisconsin">Wisconsin</option>
                                        <option value="Wyoming">Wyoming</option>
                                    </select>
                                </div>
                                <div className={styles.gridItem}>
                                    <input type='text' placeholder='Zip Code' />
                                </div>

                            </div>
                        </div>
                        <div className={styles.submitButton}>
                            <button>Continue to shipping</button>
                        </div>
                    </form>
                </div>
                <div className={styles.VerticalLine}></div>
                <div className={styles.ListCheckout}>

                    {PRODUCTS.map((product, index) => {
                        if (cartItems[product.id] !== 0) {
                            return (
                                <div key={index}>
                                    <div className={styles.ItemCard} key={index}>
                                        <div className={styles.ProductInfo}>
                                            <div className={styles.Image}>
                                                <img src={product.img} alt="product" />
                                            </div>
                                            <div className={styles.name}>
                                                <h6><strong>{product.name}</strong></h6>
                                                <h6>Size : {product.size}</h6>
                                            </div>
                                        </div>
                                        <div className={styles.Price}>
                                            <p> {product.price}</p>
                                            <p> x{cartItems[product.id]}</p>
                                        </div>
                                    </div>
                                    <hr className={styles.horzontal} />
                                </div>
                            )
                        }
                        else {
                            return <p></p>
                        }
                    })}

                    {/* 
                    {selected.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.ItemCard} key={index}>
                                    <div className={styles.ProductInfo}>
                                        <div className={styles.Image}>
                                            <img src={item.img} alt="product" />
                                        </div>
                                        <div className={styles.name}>
                                            <h6><strong>{item.name}</strong></h6>
                                            <h6>Size : {item.size}</h6>
                                        </div>
                                    </div>
                                    <div className={styles.Price}>
                                        <p> {item.price}</p>
                                        <p> x2</p>
                                    </div>
                                </div>
                                <hr className={styles.horzontal} />
                            </div>
                        )
                    })} */}
                    <div className={styles.pricing}>
                        <div className={styles.pricingItem}>
                            <h6>Subtotal</h6>
                            <h6><strong>${totalAmount}</strong></h6>
                        </div>
                        <div className={styles.pricingItem}>
                            <h6>Shipping</h6>
                            <h6>$</h6>
                        </div>
                        <div className={styles.pricingItem}>
                            <h6><strong>Total</strong></h6>
                            <h6>USD <strong>${totalAmount}</strong></h6>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Checkout
