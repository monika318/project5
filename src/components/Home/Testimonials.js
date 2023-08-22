import React, { useEffect, useState } from 'react'
import styles from './Testimonials.module.css'
import TestimonialData from '../../Testimonials.json'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import Button from '../Button/Button'

const Testimonials = () => {
    // eslint-disable-next-line
    const [size, setSize] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const isMobileView = window.innerWidth < 960;
            setSize(isMobileView)

            if (!isMobileView) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        const targetElement = entry.target;
                        if (targetElement.classList.contains('hiddenTestimonials')) {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("showTestimonials");
                            }
                        }

                    });
                });

                const hiddenElsHeading = document.querySelectorAll('.hiddenTestimonials');

                hiddenElsHeading.forEach((el) => observer.observe(el));

                return () => {
                    hiddenElsHeading.forEach((el) => observer.unobserve(el));

                };
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <div className={styles.TestimonialsOuter}>
            <div className={styles.TopSection}>
                <div className={styles.FloatingSection}>
                    <div className={styles.text}>
                        <h3>Original Handmade Goods</h3>
                        <Button name="View All" action="/Shop" />
                    </div>
                </div>
            </div>
            <div className={styles.BottomDivTest}>
                <div className={styles.overlay}></div>
                <h1 style={{ color: 'white' }}>Our Happy Customers</h1>

                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className='Testswiper hiddenTestimonials'
                >
                    {TestimonialData.map((element, index) => {
                        return (
                            <SwiperSlide className={styles.swiperSlide} key={index}>
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
