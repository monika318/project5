import React from 'react'
import TopBanner from '../../components/TopBanner/TopBanner'
import styles from './Contact.module.css'
import { BsTelephoneFill } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { FaLocationArrow } from 'react-icons/fa'

const Contact = () => {
    return (
        <div className={styles.Contact}>
            <TopBanner Pagename="Contact" PageLink='/contact' />
            <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.504354183032!2d85.30445247467095!3d27.670802627103832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19628ba30cb5%3A0x7927837c54013d33!2sWeb%20Tuned%20Studio!5e0!3m2!1sen!2snp!4v1692007897734!5m2!1sen!2snp" width="90%" height="500" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className={styles.ContactInfo}>
                <div className={styles.InnerContactInfo}>
                    <div className={styles.Icon}>
                        <BsTelephoneFill />
                    </div>
                    <h1>Phone</h1>
                    <div>
                        <p>0123-456-7890</p>
                        <p>0123-456-7890</p>
                    </div>
                </div>
                <div className={styles.InnerContactInfo}>
                    <div className={styles.Icon}>
                        <GrMail />
                    </div>
                    <h1>Email</h1>
                    <div>
                        <p>info@example.com</p>
                        <p>support@example.com</p>
                    </div>
                </div>
                <div className={styles.InnerContactInfo}>
                    <div className={styles.Icon}>
                        <FaLocationArrow />
                    </div>
                    <h1>Address</h1>
                    <div>
                        <p>No: 58 A, East Madison Street,
                        </p>
                        <p>Baltimore, MD, USA 4508</p>
                    </div>
                </div>
            </div>
            <div className={styles.ContactForm}>
                <div className={styles.container}>
                    <h1>Contact Form</h1>
                    <form>
                        <div className={styles.gridContainer}>
                            <div className={styles.gridItem}>
                                <input type='text' placeholder='Name' />
                            </div>
                            <div className={styles.gridItem}>
                                <input type='number' placeholder='Phone' />
                            </div>
                            <div className={styles.gridItem}>
                                <input type='email' placeholder='Email' />
                            </div>
                            <div className={`${styles.gridItem} ${styles.Fourthcolumn}`}>
                                <textarea placeholder='Message' rows="10" />
                            </div>
                        </div>
                        <button> Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
