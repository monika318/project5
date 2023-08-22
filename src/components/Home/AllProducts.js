import React, { useState, useEffect } from 'react'
import styles from './AllProducts.module.css'
import Card from '../CardAltered/Card'
import Cart from '../CartAltered/Cart'
import component1 from '../../images/Component5.png'
import component2 from '../../images/Component8.png'
import products from '../../Product.json'

const AllProducts = () => {
    const [showCart, setShowCart] = useState(false);
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
                        if (targetElement.classList.contains('hiddenHeading')) {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("showHeading");
                            }
                        }

                    });
                });

                const hiddenElsHeading = document.querySelectorAll('.hiddenHeading');

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
        <div className={styles.AllProducts}>
            <div className='headerAll hiddenHeading'>
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
