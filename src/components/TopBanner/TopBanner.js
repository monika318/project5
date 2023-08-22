import React from 'react'
import { Link } from 'react-router-dom'
import * as LiaIcons from 'react-icons/lia'
import styles from './TopBanner.module.css'

const TopBanner = (props) => {
    const { Pagename, PageLink } = props;
    return (
        <>
            <div className={styles.banner} >
                <h1>{Pagename}</h1>
                <div className={styles.headerText}>
                    <Link to="/">Home</Link>
                    <LiaIcons.LiaGreaterThanSolid />
                    <Link to={PageLink}>{Pagename}</Link>
                </div>
            </div>
        </>
    )
}

export default TopBanner
