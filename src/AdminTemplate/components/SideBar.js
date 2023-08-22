import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Sidebar.module.css'
import * as AiIcons from 'react-icons/ai';
import { IconContext } from 'react-icons';
import * as BiIcons from 'react-icons/bi'
import * as RiIcons from 'react-icons/ri'

const SideBar = () => {
    const location = useLocation();
    let locationString = location.pathname.slice(1);

    const [pathname, setpathname] = useState(location.pathname.slice(11));
    const shouldShowNavbar = locationString.includes('dashboard') && !locationString.includes('AccessDenied');
    useEffect(() => {
        setpathname(location.pathname.slice(11))
    }, [location])

    return (
        <>
            {shouldShowNavbar &&
                <div className={styles.FixedSideBar}>
                    <div className={styles.UserHeader}>
                        <h2>Admin</h2>
                    </div>
                    <hr />
                    <div className={styles.LinksBody}>
                        <h6>Main Links</h6>
                        <IconContext.Provider value={{ size: '20px', color: '#03383c' }}>
                            <Link to='/dashboard/Home'>
                                <div className={pathname === 'Home' ? `${styles.DashboardItems} ${styles.active}` : styles.DashboardItems} >
                                    <AiIcons.AiFillHome />
                                    <h4>Home</h4>
                                </div>
                            </Link>
                            <Link to='/dashboard/Category'>
                                <div className={pathname === 'Category' ? `${styles.DashboardItems} ${styles.active}` : styles.DashboardItems} >
                                    <BiIcons.BiSolidCategoryAlt />
                                    <h4>Category</h4>
                                </div>
                            </Link>
                            <Link to='/dashboard/Products'>
                                <div className={pathname === 'Products' ? `${styles.DashboardItems} ${styles.active}` : styles.DashboardItems} >
                                    <AiIcons.AiFillGift />
                                    <h4>Products</h4>
                                </div>
                            </Link>
                            <Link to='/dashboard/Order'>
                                <div className={pathname === 'Order' ? `${styles.DashboardItems} ${styles.active}` : styles.DashboardItems} >
                                    <RiIcons.RiShoppingCartFill />
                                    <h4>Orders</h4>
                                </div>
                            </Link>
                        </IconContext.Provider>
                    </div>
                </div>
            }
        </>
    )
}

export default SideBar
