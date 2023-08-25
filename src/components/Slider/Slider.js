import React, { useState, useContext, useEffect, useCallback } from 'react'
import * as LiaIcons from 'react-icons/lia'
import { ShopContext } from '../../context/ShopContext';
import PRODUCTS from '../../Products';

const Slider = ({ slides, id }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // eslint-disable-next-line 
    const { addToCart, getTotalCartAmount, cartItems, removeFromCart, updateCartItemCount, CancelProductFromCart } = useContext(ShopContext);

    const sliderStyles = {
        height: "100%",
        position: "relative"
    }
    // eslint-disable-next-line 
    const transitionDuration = 500;

    let itemInfo = PRODUCTS.find((product) => product.id === Number(id))

    const slideStyles = {
        width: '100%',
        height: '100%',
        borderRadius: "10px",
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${itemInfo.imgArray[currentIndex]})`,
    }
    const leftArrowStyles = {
        position: "absolute",
        top: '50%',
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "30px",
        color: "whitesmoke",
        zIndex: 1,
        cursor: 'pointer',
        backgroundColor: '#7e8865',
        margin: 0,
        padding: "0px 7px 4px 7px"
    }
    const rightArrowStyles = {
        position: "absolute",
        top: '50%',
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "30px",
        color: "whitesmoke",
        zIndex: 1,
        cursor: 'pointer',
        backgroundColor: '#7e8865',
        margin: 0,
        padding: "0px 7px 4px 7px"
    }
    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)

    }
    // const goToNext = () => {
    //     const isLastSlide = currentIndex === slides.length - 1
    //     const newIndex = isLastSlide ? 0 : currentIndex + 1
    //     setCurrentIndex(newIndex)
    // }
    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides.length]);
    const dotsContainerSlides = {
        display: 'flex',
        justifyContent: 'center',
    }
    const dotStyles = {
        margin: '0 3px',
        cursor: 'pointer',
        fontSize: '20px',
        color: '#7e8865'
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

    //Add an autoplay state and a delay value (in milliseconds)
    const [autoplay, setAutoplay] = useState(true);
    const autoplayDelay = 2000; // Change this to your desired delay

    // Use useEffect to control the autoplay behavior
    useEffect(() => {
        let autoplayInterval;
        if (autoplay) {
            autoplayInterval = setInterval(goToNext, autoplayDelay);
        } else {
            clearInterval(autoplayInterval);
        }

        return () => {
            clearInterval(autoplayInterval);
        };
    }, [autoplay, currentIndex, goToNext]); // Autoplay depends on currentIndex as well

    // Toggle autoplay on/off when clicked
    const toggleAutoplay = () => {
        setAutoplay(!autoplay);
    };

    return (
        <div style={sliderStyles}>
            <div style={leftArrowStyles} onClick={goToPrevious}><LiaIcons.LiaLessThanSolid /></div>
            <div style={slideStyles}></div>
            <div style={rightArrowStyles} onClick={goToNext}><LiaIcons.LiaGreaterThanSolid /></div>
            <div style={dotsContainerSlides}>
                {itemInfo.imgArray.map((slide, slideIndex) => (
                    <div key={slideIndex} style={dotStyles} onClick={() => goToSlide(slideIndex)}>&bull;</div>
                ))}
            </div>
            <div
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    fontSize: "18px",
                    color: "#7e8865",
                    cursor: "pointer",
                }}
                onClick={toggleAutoplay}
            >
                {/* {autoplay ? "Pause Autoplay" : "Play Autoplay"} */}
            </div>
        </div>
    )
}

export default Slider
