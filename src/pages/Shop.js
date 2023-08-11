import React, { useState } from 'react'
import styles from './Shop.module.css'
import TopBanner from '../components/TopBanner/TopBanner'
import { BsFillGrid3X3GapFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import Card from '../components/Card/Card'
import products from '../Product.json'
import CardList from '../components/CardList/CardList'

const Shop = () => {
    const [View, setView] = useState('Grid')

    const handleViewClick = (view) => {
        setView(view)
    }
    return (

        <div className={styles.Shop}>
            <TopBanner Pagename='Shop' PageLink='/Shop' />
            <div className={styles.OuterShop}>
                <div className={styles.LeftSection}>
                    Hi
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
                                <select name="filter" id="cars">
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
                            products.map((item, index) => {
                                return (
                                    <div className={styles.EachProduct}>
                                        <Card item={item} key={index} description='false' />
                                    </div>

                                )
                            })
                        }
                        {View === 'List' &&
                            products.map((item, index) => {
                                return (
                                    <div className={styles.ListProduct}>
                                        <CardList item={item} key={index} />
                                        <hr />
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop
