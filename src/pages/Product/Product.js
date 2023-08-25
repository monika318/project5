import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import Cart from '../../components/CartAltered/Cart'
import styles from './Product.module.css'
// import products from '../Product.json'
// importPRODUCTS from '../../ProductItems'
import PRODUCTS from '../../Products'
import TopBanner from '../../components/TopBanner/TopBanner'
import Lightbox from '../../components/LightBox/Lightbox'
import { ShopContext } from '../../context/ShopContext';


// import required modules

const Product = () => {
    const [showCart, setShowCart] = useState(false);
    const [options, setoptions] = useState('Description')
    const { id } = useParams();
    console.log(id)
    const { addToCart } = useContext(ShopContext);

    const productWithId = PRODUCTS.find(product => product.id === parseInt(id));

    console.log(productWithId)
    // const handleAddToCart = (id) => {
    //     // console.log(JSON.stringify(id))
    //     setShowCart(true);
    //     const existingCartKeysString = localStorage.getItem('cartKey');
    //     let existingCartKeys = [];

    //     if (existingCartKeysString) {
    //         try {
    //             existingCartKeys = JSON.parse(existingCartKeysString);
    //             if (!Array.isArray(existingCartKeys)) {
    //                 existingCartKeys = [];
    //             }
    //         } catch (error) {
    //             console.error('Error parsing existingCartKeys:', error);
    //             existingCartKeys = [];
    //         }
    //     }
    //     // Add the new key to the array
    //     existingCartKeys.push(id);
    //     // Store the updated array of keys in local storage
    //     localStorage.setItem('cartKey', JSON.stringify(existingCartKeys));
    // }


    const handleAddToCart = (id) => {
        addToCart(id)
        setShowCart(true)
    }

    return (
        <>
            <div className={styles.ProductOuter}>

                <div className={showCart ? `${styles.model} ${styles.open}` : styles.model}>
                    <div className={styles.SideCart}>
                        <Cart setShowCart={setShowCart} />
                    </div>
                </div>
                <TopBanner Pagename='Product' PageLink={`/product/${id}`} />
                <div className={styles.SoloProduct}>
                    <div className={styles.container}>
                        {/* <Lightbox id={id} /> */}
                        <Lightbox img={productWithId.img} imgArray={productWithId.imgArray} />
                        <div className={styles.DescriptionDiv}>
                            <h3>{productWithId.name}</h3>
                            <div className={styles.ProductPrice}>
                                <h1>${productWithId.price}</h1>
                            </div>
                            {/* <p><span>Price:</span> {productWithId.price}</p> */}
                            <p><span>Avalability:</span> </p>
                            <p><span>Quantity:</span> </p>
                            <p><span>Size: {productWithId.size}</span> </p>
                            <button onClick={() => handleAddToCart(productWithId.id)}>Add to Cart</button>
                            {/* <button>Buy it now</button> */}
                            {/* <button>Add to wishlist</button> */}
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
                                {productWithId.description}
                            </p>
                        </div>}
                    {options === 'Shipping' &&
                        <div className={styles.Shipping}>
                            <strong>Returns Policy</strong>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quidem ab maiores! Qui dolores sapiente ducimus ad vero assumenda voluptates? Labore, error! Veritatis, accusantium eius dolorem magni, molestias, aut id sit porro voluptates totam doloremque reprehenderit reiciendis repudiandae distinctio nulla blanditiis facilis minima nesciunt quaerat! Nobis, excepturi. Nesciunt temporibus perferendis corrupti fuga unde voluptatem, dolorem dignissimos natus? Debitis doloribus sequi quisquam a amet est, omnis totam repudiandae dolorem eaque illo accusantium mollitia magnam error vel! Earum ipsa tenetur excepturi consectetur illo, corporis quos sit! Quos, dicta possimus alias error amet distinctio, voluptates vel molestiae quis ipsam deleniti placeat debitis labore!</p>
                            <strong>Shipping</strong>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus nobis veniam doloremque velit assumenda vitae magni nihil eos accusantium, modi ipsa quibusdam rem earum. Laborum sunt reprehenderit animi eum voluptates debitis ratione exercitationem nam quos perspiciatis eveniet nulla non eligendi molestiae doloremque, quo amet ad, maxime cum, quia suscipit. Fugit expedita id illo ex voluptatibus alias, sed aspernatur, incidunt, accusantium fugiat autem facere. Iste commodi deleniti dicta neque inventore architecto, laborum alias doloremque ipsa, harum sed? Quibusdam, hic, voluptates voluptatem velit laborum delectus quo ab aliquid nam at illo adipisci. Aspernatur amet similique accusantium odio delectus odit, veniam dolore voluptas nihil perferendis dolorum eveniet pariatur autem doloribus. Temporibus doloribus ratione magnam, nobis expedita quas consequatur, eos rerum animi laboriosam sunt nemo neque incidunt ipsam, voluptatem est nisi quam? Nemo.
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
