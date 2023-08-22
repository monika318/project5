import React, { useContext, useState } from 'react'
import * as  AiIcons from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import styles from './CardList.module.css';
import { ShopContext } from '../../context/ShopContext';
import Slider from '../Slider/Slider'
import Modal from '../Modal/Modal'
import { createPortal } from 'react-dom'
import Button from '../Button/Button';




const CardList = (props) => {
    const { item, setShowCart } = props;
    const navigate = useNavigate();
    const { addToCart, cartItems, removeFromCart, updateCartItemCount } = useContext(ShopContext);

    const handleAddToCart = (id) => {
        // console.log(JSON.stringify(id))
        setShowCart(true);
        addToCart(id)
    }
    const handleButtonClick = (value) => {
        setModalOpen(false)
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
    const handleImageOnClick = (id) => {
        // console.log(id)       
        navigate(`/product/${id}`);
    }

    const addToCartModal = () => {
        addToCart(item.id)

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
    return (
        <div>
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
                                    <p><span>Price:</span> {item.price}</p>
                                    <p><span>Avalability:</span> </p>
                                    <p><span>Quantity:</span> </p>
                                    <p><span>Size: {item.size}</span> </p>
                                    <div className={styles.countHandler}>
                                        <button onClick={() => removeFromCart(item.id)}> - </button>
                                        <input value={cartItems[item.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), item.id)} />
                                        <button onClick={() => addToCartModal(item.id)}> + </button>
                                    </div>
                                    {/* <button onClick={() => handleAddToCart(item.id)}>Add to Cart</button> */}
                                    <Button name="Add to Cart" widthProp="50%" action='/cart'></Button>
                                    {/* {<p>Input The number of items</p>} */}
                                    {/* action={cartItems[item.id] > 0 ? '/cart' : ''} */}
                                    <Button name="Add to wishlist" widthProp="50%"></Button>
                                    <button className={styles.ProductButton} onClick={() => handleImageOnClick(item.id)}> View Product &rarr;</button>
                                </div>
                            </div>
                        </Modal>,
                        document.body
                    )}
                <div className={styles.cardImage}>
                    <img src={item.img} alt="product1" />
                    <div className={styles.overlay} onClick={() => handleImageOnClick(item.id)}>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.Icons} onClick={() => handleAddToCart(item.id)}>
                            <AiIcons.AiOutlineShoppingCart />
                        </div>
                        <div className={styles.v1}></div>
                        <div className={styles.Icons}>
                            <AiIcons.AiOutlineStar />
                        </div>
                        <div className={styles.v1}></div>
                        <div className={styles.Icons}>
                            <AiIcons.AiOutlineSearch onClick={() => setModalOpen(true)} />
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
                    <p>{item.price}</p>
                    {/* {props.description && <p style={{ width: '80%', textAlign: 'center' }}>{item.description}</p>} */}
                </div>
            </div>
        </div>
    )
}

export default CardList
