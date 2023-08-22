import React, { useState, useEffect } from 'react'
import styles from './Shop.module.css'
import TopBanner from '../../components/TopBanner/TopBanner'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import Card from '../../components/CardAltered/Card'
import Cart from '../../components/CartAltered/Cart'
// import products from '../../Product.json'
import PRODUCTS from '../../Products'
import CardList from '../../components/CardList/CardList'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Shop = () => {

    const [View, setView] = useState('Grid')
    const [showCart, setShowCart] = useState(false);
    const [categoryA, setCategoryA] = useState(false);
    const [categoryB, setCategoryB] = useState(false);
    const handleViewClick = (view) => {
        setView(view)
    }
    const [SortBy, setSortBy] = useState('Featured');
    const [FromPrice, setFromPrice] = useState('0');
    const [ToPrice, setToPrice] = useState('0');
    const [records, setRecords] = useState(PRODUCTS)


    const handleFilterPrice = () => {
        // Convert FromPrice and ToPrice to numbers
        const fromPriceNumber = parseFloat(FromPrice);
        const toPriceNumber = parseFloat(ToPrice);
        // Filter products based on price range
        const filteredProducts = PRODUCTS.filter(product => {
            const productPrice = parseFloat(product.price);
            return productPrice >= fromPriceNumber && productPrice <= toPriceNumber;
        });
        setRecords(filteredProducts)
    }

    useEffect(() => {
        const sortedProducts = [...records].sort((a, b) => {
            if (SortBy === 'Price, low to high') {
                return parseFloat(a.price) - parseFloat(b.price);
            } else if (SortBy === 'Price, high to low') {
                return parseFloat(b.price) - parseFloat(a.price);
            }
            // Add more sorting criteria here if needed
            return 0;
        });
        setRecords(sortedProducts)
    }, [SortBy, records])
    // Sorting logic

    const handleClearPrice = () => {
        setRecords(PRODUCTS)
        setFromPrice('0')
        setToPrice('0')
    }


    const [currentPage, setCurrentPage] = useState(1); // Current page number
    const itemsPerPage = 6; // Number of items per page

    // Calculate the index of the first and last items on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Get the items for the current page
    const currentItems = records.slice(indexOfFirstItem, indexOfLastItem);


    return (
        <>
            <div className={styles.Shop}>
                <div className={showCart ? `${styles.model} ${styles.open}` : styles.model}>
                    <div className={styles.SideCart}>
                        <Cart setShowCart={setShowCart} />
                    </div>
                </div>
                <TopBanner Pagename='Shop' PageLink='/Shop' />
                <div className={styles.OuterShop}>
                    <div className={styles.LeftSection}>
                        <div className={styles.LeftCategorySection}>
                            <h3>Category</h3>
                            <hr />
                            <ul>
                                <li>
                                    <div
                                        className={styles.ListElement}
                                        onClick={() => setCategoryA(!categoryA)}
                                    >
                                        <h4>Clothes</h4>
                                        {!categoryA && <AiIcons.AiOutlinePlus />}
                                        {categoryA && <AiIcons.AiOutlineMinus />}
                                    </div>
                                    {categoryA && <ul className={styles.innerList}>
                                        <li>OneSie</li>
                                        <li>Pants</li>
                                    </ul>
                                    }

                                </li>
                                <li>
                                    <div
                                        className={styles.ListElement}
                                        onClick={() => setCategoryB(!categoryB)}
                                    >
                                        <h4>Bags</h4>
                                        {!categoryB && <AiIcons.AiOutlinePlus />}
                                        {categoryB && <AiIcons.AiOutlineMinus />}
                                    </div>
                                    {categoryB && <ul className={styles.innerList}>
                                        <li>Big Bag</li>
                                        <li>Small Bag</li>
                                    </ul>
                                    }
                                </li>
                            </ul>
                            <h3>Jute Products</h3>
                            <hr />
                            <Swiper navigation={true} modules={[Navigation]} className={styles.swiper}>
                                {/* {products.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                                <Card item={item} setShowCart={setShowCart} key={index} showCart={showCart} />
                                            </SwiperSlide>
                                        </div>
                                    )
                                })} */}
                                {PRODUCTS.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <SwiperSlide className={styles.swiperSlide} key={index}>
                                                <Card data={item} item={item} setShowCart={setShowCart} key={index} showCart={showCart} />
                                            </SwiperSlide>
                                        </div>
                                    )
                                })}
                            </Swiper>
                            <hr />
                            <h3>Price</h3>
                            <hr />
                            <div className={styles.PriceDiv}>
                                <p>The highest price is $400</p>
                                <div className={styles.Price}>
                                    <div className={styles.PriceInput}>
                                        <label>From $</label>
                                        <input type='number' min='0' value={FromPrice} onChange={(e) => setFromPrice(e.target.value)} />
                                    </div>
                                    <div className={styles.PriceInput}>
                                        <label>To $</label>
                                        <input type='number' min='0' value={ToPrice} onChange={(e) => setToPrice(e.target.value)} />
                                    </div>
                                </div>
                                <button onClick={handleFilterPrice}>Find</button>
                                <button onClick={handleClearPrice}>Clear All</button>
                            </div>


                        </div>
                    </div>
                    <div className={styles.RightSection}>
                        <div className={styles.SortDiv}>
                            <div className={styles.Views}>
                                <div className={View === 'Grid' ? `${styles.GridView} ${styles.active}` : styles.GridView} onClick={() => handleViewClick('Grid')}>
                                    <BsFillGrid3X3GapFill />
                                </div>
                                <div className={View === 'List' ? `${styles.ListView} ${styles.active}` : styles.ListView} onClick={() => handleViewClick('List')}>
                                    <FaThList />
                                </div>
                            </div>
                            <div className={styles.Category}>
                                <div>
                                    Sort By :
                                    <select
                                        name="filter"
                                        id="cars"
                                        value={SortBy}
                                        onChange={e => setSortBy(e.target.value)}
                                    >
                                        <option value="Featured">Featured</option>
                                        <option value="Price, low to high">Price, low to high</option>
                                        <option value="Price, high to low">Price, high to low</option>
                                        <option value="BestSelling">BestSelling</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={styles.DisplayProduct}>
                            {View === 'Grid' &&
                                currentItems.map((item, index) => {
                                    return (
                                        <div className={styles.EachProduct} key={index}>
                                            <Card item={item} key={index} description='false' setShowCart={setShowCart} />
                                        </div>

                                    )
                                })
                            }
                            {View === 'List' &&
                                currentItems.map((item, index) => {
                                    return (
                                        <div className={styles.ListProduct} key={index}>
                                            <CardList setShowCart={setShowCart} item={item} key={index} />
                                            <hr />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className={styles.Pagination}>
                            {/* Pagination controls */}
                            <button
                                disabled={currentPage === 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                &lArr;
                            </button>
                            <div>{currentPage}</div>
                            <button
                                disabled={indexOfLastItem >= records.length}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                &rArr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shop
