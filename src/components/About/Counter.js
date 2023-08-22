import React, { useState, useEffect } from 'react'
import { BsFillBuildingFill } from 'react-icons/bs'
import { LiaCertificateSolid } from 'react-icons/lia'
import { FaTruck } from 'react-icons/fa'
import { BiSolidGift } from 'react-icons/bi'
import styles from './Counter.module.css'

const Counter = () => {
    // eslint-disable-next-line
    const [scrollY, setScrollY] = useState(0);
    const scrollThreshold = 800;
    const [Store, setStore] = useState(0);
    const [Certificate, setCertificate] = useState(0);
    const [Delivery, setDelivery] = useState(0);
    const [Gift, setGift] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            if (window.scrollY >= scrollThreshold && Store < 60) {
                const interval = setInterval(() => {
                    setStore(prevStore => Math.min(prevStore + 1, 60));
                }, 80);

                if (Store === 60) {
                    clearInterval(interval);
                }
            }
            if (window.scrollY >= scrollThreshold && Certificate < 15) {
                const interval = setInterval(() => {
                    setCertificate(prevCertificate => Math.min(prevCertificate + 1, 15));
                }, 300);

                if (Certificate === 15) {
                    clearInterval(interval);
                }
            }
            if (window.scrollY >= scrollThreshold && Gift < 150) {
                const interval = setInterval(() => {
                    setGift(prevGift => Math.min(prevGift + 1, 150));
                }, 20);

                if (Gift === 150) {
                    clearInterval(interval);
                }
            }
            if (window.scrollY >= scrollThreshold && Delivery < 50) {
                const interval = setInterval(() => {
                    setDelivery(prevDelivery => Math.min(prevDelivery + 1, 50));
                }, 80);

                if (Delivery === 50) {
                    clearInterval(interval);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollThreshold, Store, Delivery, Gift, Certificate]);

    return (
        <div className={styles.CounterDiv}>
            <div className={styles.StoreDiv}>
                <div className={styles.Icon}>
                    <BsFillBuildingFill />
                </div>
                <h1>{Store}+</h1>
                <h3>Stores</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.StoreDiv}>
                <div className={styles.Icon}>
                    <LiaCertificateSolid />
                </div>
                <h1>{Certificate}+</h1>
                <h3>Certificate</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.StoreDiv}>
                <div className={styles.Icon}>
                    <FaTruck />
                </div>
                <h1>{Delivery}+</h1>
                <h3>Delivery</h3>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className={styles.StoreDiv}>
                <div className={styles.Icon}>
                    <BiSolidGift />
                </div>
                <h1>{Gift}+</h1>
                <h3>Gift Vouchers</h3>
                <p>Arcu ac tortor dignissim convallis.</p>
            </div>
        </div>
    )
}

export default Counter
