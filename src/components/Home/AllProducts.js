import React, { useState } from 'react'
import styles from './AllProducts.module.css'
import Card from '../Card/Card'
import Cart from '../Cart/Cart'
import component1 from '../../images/Component5.png'
import component2 from '../../images/Component8.png'

import products from '../../Product.json'

const AllProducts = () => {
    const [showCart, setShowCart] = useState(false);

    return (
        <div className={styles.AllProducts}>
            <div className={styles.header}>
                <img src={component1} alt="commponnet" />
                <h1>100% Handmade Goods</h1>
                <img src={component2} alt="commponnet" />
            </div>

            <div className={showCart ? `${styles.model} ${styles.open}` : styles.model}>
                <div className={styles.SideCart}>
                    <Cart setShowCart={setShowCart} />
                </div>
            </div>
            <div className={styles.OuterSection}>
                <div className={styles.container}>
                    {products.map((item, index) => {
                        return (
                            <div className={styles.InnerProducts} key={index}>
                                <Card item={item} setShowCart={setShowCart} key={index} />
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default AllProducts
