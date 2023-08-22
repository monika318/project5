import React, { useState } from 'react';
// Import Swiper React components
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// images
import image1 from '../../images/product6.png'
import image2 from '../../images/product4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './HeroSection.module.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const HeroSection = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
    };
    return (
        <>
            <div className={styles.HeroSectionDiv}>
                <Swiper
                    onSlideChange={(swiper) => {
                        handleSlideChange(swiper);
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={styles.swiper}
                >
                    <SwiperSlide className={`${styles.swiperSlide} ${styles.Div1}`}>
                        <div className={`${styles.textDiv1} ${activeSlideIndex === 0 ? styles.active : ''}`}>
                            <h2>Soft & Comfortable Pants </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi labore beatae, atque maiores ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, repudiandae nisi dolores quae laborum unde</p>
                            <Link to='/shop'><button>Shop Now</button></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className={`${styles.swiperSlide} ${styles.Div5}`}>
                        <div className={`${styles.textDiv1} ${activeSlideIndex === 1 ? styles.active : ''}`}>
                            <h2>Eco Friendly Handmade Products</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi labore beatae, atque maiores ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, repudiandae nisi dolores quae laborum unde</p>
                            <Link to='/shop'><button>Shop Now</button></Link>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className={`${styles.swiperSlide} ${styles.Div3}`}>
                        <div className={`${styles.textDiv1} ${activeSlideIndex === 2 ? styles.active : ''}`}>
                            <h2>Fine & Stylish Onesies</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi labore beatae, atque maiores ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, repudiandae nisi dolores quae laborum unde</p>
                            <Link to='/shop'><button>Shop Now</button></Link>
                        </div>
                    </SwiperSlide>
                    {/*
                <SwiperSlide className={`${styles.swiperSlide} ${styles.Div5}`}>Slide 5</SwiperSlide> */}

                </Swiper>
            </div>

            <div className={styles.productDiv}>
                <div className={styles.product}>
                    <img src={image1} alt="iamge1" />
                    <div className={styles.overlay}>
                        <div className={styles.text}>Hello World</div>
                    </div>
                    <div className={styles.overlayTwo}>
                        <div className={styles.text}>Hello World</div>
                    </div>
                    <div className={styles.productName}>
                        <p>Soft & Stylish
                            Bootoms</p>
                    </div>
                    <div className={styles.productPrice}>
                        <p>Rs. 800</p>
                    </div>
                </div>
                <div className={styles.product}>
                    <img src={image2} alt="iamge1" />
                    <div className={styles.overlay}>
                        <div className={styles.text}>Hello World</div>
                    </div>
                    <div className={styles.overlayTwo}>
                        <div className={styles.text}>Hello World</div>
                    </div>
                    <div className={styles.productName}>
                        <p>Comfortable and Soft
                            Onesie</p>
                    </div>
                    <div className={styles.productPrice}>
                        <p>Rs. 1000</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HeroSection


