import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Testimonials.module.css'
import avatar1 from '../../images/avatar1.jpg'
import avatar2 from '../../images/avatar2.jpg'
import TestimonialData from '../../Testimonials.json'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';



const Testimonials = () => {
    const navigate = useNavigate()
    const handleViewAll = () => {
        navigate('/Shop');
    }
    return (
        <div className={styles.TestimonialsOuter}>
            <div className={styles.TopSection}>
                <div className={styles.FloatingSection}>
                    <div className={styles.text}>
                        <h3>Original Handmade Goods</h3>
                        <button onClick={handleViewAll}>View All</button>
                    </div>
                </div>
            </div>
            <div className={styles.BottomDiv}>
                <div className={styles.overlay}></div>
                <h1 style={{ color: 'white' }}>Our Happy Customers</h1>
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className={styles.swiper}
                >
                    {TestimonialData.map((element) => {
                        return (
                            <SwiperSlide className={styles.swiperSlide}>
                                <img src={element.img} alt="avatar1" />
                                <p>{element.review}</p>
                                <p>{element.name}</p>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div >
    )
}

export default Testimonials
