import React, { useContext, useEffect, useState } from 'react'
import * as  AiIcons from 'react-icons/ai'
import styles from './Card.module.css'
import { useNavigate, useLocation } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import { createPortal } from 'react-dom'
import Modal from '../Modal/Modal'
import Slider from '../Slider/Slider'
import Button from '../Button/Button';

const Card = (props) => {
    const { item, setShowCart } = props;
    // eslint-disable-next-line
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    // console.log(windowWidth);
    const location = useLocation();
    const locationString = location.pathname.slice(1);
    // eslint-disable-next-line
    const [shopStyle, setShopStyle] = useState(false);

    useEffect(() => {
        if (locationString.includes('shop') && windowWidth < 800) {
            setShopStyle(true);
        } else {
            setShopStyle(false);
        }
    }, [locationString, windowWidth]);

    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);
    const navigate = useNavigate()

    const handleImageOnClick = (id) => {
        navigate(`/product/${item.id}`);
    }
    const handleAddToCart = () => {
        addToCart(item.id)
        setShowCart(true)
    }
    const addToCartModal = () => {
        addToCart(item.id)

    }

    const slides = [
        {
            url: 'http://localhost:3000/static/media/product4.c421b0c58a52bd3dd311.jpg',
            title: 'Product1'
        },
        {
            url: 'http://localhost:3000/static/media/product5.064fac56fff16c1c6959.jpg',
            title: 'Product2'
        },
        {
            url: 'http://localhost:3000/static/media/product6.4d937b723d9f4049579b.png',
            title: 'Product3'
        }
    ]
    const handleButtonClick = (value) => {

        setModalOpen(false)

    }
    const [modalOpen, setModalOpen] = useState(false);
    const containerSlides = {
        width: "520px",
        height: "450px",
        margin: "0"
    }
    // const handleAddToCartPage = (id) => {
    //     navigate('/cart')
    // }
    const handleSearchClick = () => {
        if (windowWidth > 1280) {
            setModalOpen(true)
        } else {
            navigate(`/product/${item.id}`);
        }
    }
    return (
        <>

            <div className={styles.card} >
                {modalOpen &&
                    createPortal(
                        <Modal
                            onClose={handleButtonClick}
                            onSubmit={handleButtonClick}
                            onCancel={handleButtonClick}
                        >
                            <div className={styles.modalDiv} >
                                <div className={styles.ModalImageDiv}>
                                    <div style={containerSlides}>
                                        <Slider slides={slides} id={item.id} />
                                    </div>
                                </div>
                                <div className={styles.ModalTextDiv}>
                                    <h3>{item.name}</h3>
                                    <div>
                                        <p><span>Price:</span> ${item.price}</p>
                                        <p><span>Color:</span></p>
                                        <p><span>Size: {item.size}</span> </p>
                                    </div>
                                    <p>{item.description}</p>
                                    <div className={styles.countHandler}>
                                        <button onClick={() => removeFromCart(item.id)}> - </button>
                                        <input value={cartItems[item.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), item.id)} />
                                        <button onClick={() => addToCartModal(item.id)}> + </button>
                                    </div>
                                    {/* <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button> */}
                                    <Button name="Add to Cart" widthProp="50%" action='/cart'></Button>
                                    {/* {<p>Input The number of items</p>} */}
                                    {/* action={cartItems[item.id] > 0 ? '/cart' : ''} */}
                                    {/* <Button name="Add to wishlist" widthProp="50%"></Button> */}
                                    <button className={styles.ProductButton} onClick={() => handleImageOnClick(item.id)}> View Product &rarr;</button>
                                </div>
                            </div>
                        </Modal>,
                        document.body
                    )}

                <div className={shopStyle ? `${styles.ShopStyle} ${styles.cardImage}` : styles.cardImage}>
                    <img src={item.img} alt="product1" />

                    <div className={styles.overlay} onClick={() => handleImageOnClick(item.id)}>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.Icons} onClick={() => handleAddToCart(item.id)}>
                            <AiIcons.AiOutlineShoppingCart />
                        </div>
                        <div className={styles.v1}></div>
                        {/* <div className={styles.Icons}>
                            <AiIcons.AiOutlineStar />
                        </div> */}
                        {/* <div className={styles.v1}></div> */}
                        <div className={styles.Icons}>
                            <AiIcons.AiOutlineSearch onClick={() => handleSearchClick()} />
                        </div>
                    </div>
                </div>
                <div className={styles.cardBody} >
                    <h2>{item.name}</h2>
                    <p>
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                        <AiIcons.AiFillStar />
                    </p>
                    <p className={styles.CrossPrice}>${item.crossPrice}</p>
                    <p>${item.price}</p>
                    <div className={styles.CardAction}>
                        <button onClick={() => handleAddToCart(item.id)}> <AiIcons.AiOutlineShoppingCart /></button>
                        <button onClick={() => handleSearchClick()} ><AiIcons.AiOutlineSearch /></button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Card
