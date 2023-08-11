import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../components/Cart/Cart'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'
import * as LiaIcons from 'react-icons/lia'
// import products from '../Product.json'
import ProductItem from '../ProductItems'
import TopBanner from '../components/TopBanner/TopBanner'



import Lightbox from '../components/LightBox/Lightbox'

// import required modules

const Product = () => {
    const [showCart, setShowCart] = useState(false);
    const [options, setoptions] = useState('Description')
    const { id } = useParams();

    const productWithId = ProductItem.find(product => product.id === id);
    console.log(productWithId)
    return (
        <>
            <div className={styles.ProductOuter}>
                {/* <div className={showCart ? `${styles.model} ${styles.open}` : styles.model}>
                    <div className={styles.SideCart}>
                        <Cart setShowCart={setShowCart} />
                    </div>
                </div> */}
                <TopBanner Pagename='Product' PageLink={`/product/${id}`} />

                <div className={styles.SoloProduct}>
                    <div className={styles.container}>
                        <Lightbox img={productWithId.img} imgArray={productWithId.imgArray} />
                        <div className={styles.DescriptionDiv}>
                            <h3>{productWithId.name}</h3>
                            <p><span>Price:</span> {productWithId.price}</p>
                            <p><span>Avalability:</span> </p>
                            <p><span>Quantity:</span> </p>
                            <p><span>Size: {productWithId.size}</span> </p>
                            <button>Add to Cart</button>
                            <button>Buy it now</button>
                            <button>Add to wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.Information}>
                <div className={styles.Buttons}>
                    <button className={options === 'Description' ? styles.clicked : ''} onClick={() => setoptions('Description')}>Description</button>
                    <button className={options === 'Shipping' ? styles.clicked : ''} onClick={() => setoptions('Shipping')}>Shipping Information</button>
                    <button className={options === 'Reviews' ? styles.clicked : ''} onClick={() => setoptions('Reviews')}>Reviews</button>
                </div>
                <div className={styles.Details}>
                    {options === 'Description' &&
                        <div className={styles.Descrption}>
                            <strong>Sample Paragraph Text</strong>
                            <p>
                                {productWithId.description}</p>
                        </div>}
                    {options === 'Shipping' &&
                        <div className={styles.Shipping}>
                            <strong>Returns Policy</strong>
                            <p>You may return most new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return is a result of our error (you received an incorrect or defective item, etc.).

                                You should expect to receive your refund within four weeks of giving your package to the return shipper, however, in many cases you will receive a refund more quickly. This time period includes the transit time for us to receive your return from the shipper (5 to 10 business days), the time it takes us to process your return once we receive it (3 to 5 business days), and the time it takes your bank to process our refund request (5 to 10 business days).

                                If you need to return an item, simply login to your account, view the order using the 'Complete Orders' link under the My Account menu and click the Return Item(s) button. We'll notify you via e-mail of your refund once we've received and processed the returned item.
                            </p>
                            <strong>Shipping</strong>
                            <p>
                                We can ship to virtually any address in the world. Note that there are restrictions on some products, and some products cannot be shipped to international destinations.

                                When you place an order, we will estimate shipping and delivery dates for you based on the availability of your items and the shipping options you choose. Depending on the shipping provider you choose, shipping date estimates may appear on the shipping quotes page.

                                Please also note that the shipping rates for many items we sell are weight-based. The weight of any such item can be found on its detail page. To reflect the policies of the shipping companies we use, all weights will be rounded up to the next full pound.
                            </p>
                        </div>}
                    {options === 'Reviews' &&
                        <div className={styles.Reviews}>
                            <strong>Customer Reviews</strong>
                        </div>}

                </div>
            </div>
        </>
    )
}

export default Product
