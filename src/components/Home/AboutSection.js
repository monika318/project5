import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { EffectFade, Autoplay, Navigation } from 'swiper/modules';
const AboutSection = () => {

    return (
        <div>
            <Swiper
                className="slider-one"
                spaceBetween={30}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                modules={[EffectFade, Autoplay, Navigation]}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>

            <Swiper
                className="slider-two"
                spaceBetween={30}
                effect={'fade'}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true}
                pagination={{ el: '.swiper-pagination', clickable: true }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AboutSection
