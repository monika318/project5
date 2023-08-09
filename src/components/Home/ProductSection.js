import React, { useState } from 'react'
import styles from './Product.module.css'
import CartStyles from '../Cart/Cart.module.css'
import image from '../../images/product5.jpg'

import * as AiIcons from 'react-icons/ai'
import Cart from '../Cart/Cart'
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import products from '../../Product.json';
import image1 from '../../images/product1.jpg'
import { AiOutlineClose } from 'react-icons/ai'

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const ProductSection = () => {
    const [showCart, setShowCart] = useState(false);

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



    return (
        <div className={styles.productSection}>
            <div className={showCart ? `${styles.model} ${styles.open}` : styles.model}>
                <div className={styles.SideCart}>
                    <Cart setShowCart={setShowCart} />
                </div>
            </div>
            <div className={styles.LeftDiv}>
                <img src={image} alt="imageleft" />
                <div className={styles.productName}>
                    <p>Comfortable and Soft
                        Pants</p>
                </div>
                <div className={styles.productPrice}>
                    <p>Rs. 1000</p>
                </div>
            </div>
            <div className={styles.RightDiv}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}

                    modules={[Pagination, Navigation]}
                    className={styles.swiper}
                >
                    {products.map((item, index) => {
                        return (
                            <>
                                <SwiperSlide className={styles.swiperSlide} key={index}>
                                    <Card item={item} setShowCart={setShowCart} />
                                    {/* <div className={styles.card}>
                                        <div className={styles.cardImage}>
                                            <img src={item.img} alt="product1" />
                                            <div className={styles.middle}>
                                                <div className={styles.text}>
                                                    <div className={styles.Icons} onClick={() => handleAddToCart(item.id)}>
                                                        <AiIcons.AiOutlineShoppingCart />
                                                    </div>
                                                    <div className={styles.v1}></div>
                                                    <div className={styles.Icons}>
                                                        <AiIcons.AiFillStar />
                                                    </div>
                                                    <div className={styles.v1}></div>
                                                    <div className={styles.Icons}>
                                                        <AiIcons.AiOutlineSearch />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.cardBody}>
                                            <h2>{item.name}</h2>
                                            <p><AiIcons.AiFillStar /><AiIcons.AiFillStar /><AiIcons.AiFillStar /><AiIcons.AiFillStar /><AiIcons.AiFillStar /></p>
                                            <p>{item.price}</p>
                                            <p style={{ width: '80%', textAlign: 'center' }}>{item.description}</p>
                                        </div>
                                    </div> */}
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </div>
            {/* {showCart && <Cart />} */}
        </div >
    )
}

export default ProductSection
