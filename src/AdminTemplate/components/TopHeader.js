import React from 'react'
import { useLocation } from 'react-router-dom';

import styles from './TopHeader.module.css'
const TopHeader = () => {
    const location = useLocation();
    let locationString = location.pathname.slice(1);
    const shouldShowNavbar = locationString.includes('dashboard');
    return (
        <div>
            {shouldShowNavbar &&
                <div className={styles.RightSection}>
                    <div className={styles.RightTopHeader}>
                        <h1>Groovy</h1>
                    </div>
                    {/* <div className={styles.links}>
                    {options === 'Home' && <Home />}
                    {options === 'Category' && <Category />}
                    {options === 'Products' && <Products />}
                    {options === 'Orders' && <Order />}
                </div> */}
                </div>
            }
        </div>
    )
}

export default TopHeader
