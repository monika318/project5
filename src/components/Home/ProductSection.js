import React, { useState } from 'react'
import styles from './ProductSection.module.css'
import image from '../../images/product5.jpg'

import Cart from '../Cart/Cart'
import Card from '../Card/Card'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import products from '../../Product.json';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

const ProductSection = () => {
    const [showCart, setShowCart] = useState(false);
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
                                    <Card item={item} setShowCart={setShowCart} key={index} />
                                </SwiperSlide>
                            </>
                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default ProductSection
