import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'
import * as FaIcons from 'react-icons/fa'
import * as BsIcons from 'react-icons/bs'
// import { IconContext } from 'react-icons'


const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className={styles.footer}>
            <div className={styles.FooterHeader}>
                <h6>Store Map</h6>
                <h6>Policy</h6>
                <h6>Gallery</h6>
                <h6>Cancellation</h6>
                <h6>Terms & Conditions</h6>
                <h6>Portfolio</h6>
            </div>
            <div className={styles.innerFooter}>
                <div className={styles.logo}>
                    {/* <NavLink to="/" ><img src={Logo} alt="logo" /></NavLink> */}
                    <Link to="/" ><p>Groovy</p></Link>
                </div>
                <div className={styles.SocialIcons}>
                    {/* <IconContext.Provider value={{ size: '18px', color: '#03383c' }}> */}
                    <a href='#!'><FaIcons.FaFacebookF /></a>
                    <a href='#!'><BsIcons.BsInstagram /></a>
                    <a href='#!'><BsIcons.BsTwitter /></a>
                    <a href='#!'><BsIcons.BsPinterest /></a>
                    {/* </IconContext.Provider> */}
                </div>
                <div className={styles.location}>
                    <p>No: 01 A,Example Street, Example, State, USA 1234</p>
                    <p><a href="tel:0000 - 123 - 456789">0000 - 123 - 456789</a></p>
                    <p><a href="mailto:info@example.com">info@example.com</a></p>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {year} Copyright Groovy Handmade</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
