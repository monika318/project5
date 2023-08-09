import React, { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as FiIcons from 'react-icons/fi'
import { IconContext } from 'react-icons';
import styles from './Navbar.module.css';

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)


    const location = useLocation();

    useEffect(() => {
        let locationString = location.pathname.slice(1);
        if (!locationString) {
            locationString = "home"
        }
        const str2 = locationString.charAt(0).toUpperCase() + locationString.slice(1);
        // const str2 = locationString.toUpperCase();
        let titleString = "Grovy Handmade - " + str2;
        document.title = titleString
    }, [location.pathname]);


    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [dropdownHelp, setDropdownHelp] = useState(false);
    const [dropdownwho, setDropdownwho] = useState(false);

    const handleDropdownCclick = (e) => {
        setDropdownVisible(!dropdownVisible);
        if (dropdownVisible) {
            e.target.classList.add(styles.color);
        } else {
            e.target.classList.remove(styles.color);
        }
    };
    const handleClickHelp = (e) => {
        setDropdownHelp(!dropdownHelp);
        if (dropdownHelp) {
            e.target.classList.add(styles.color);
        } else {
            e.target.classList.remove(styles.color);
        }
    }
    const handleClickWho = (e) => {
        setDropdownwho(!dropdownwho);
        if (dropdownwho) {
            e.target.classList.add(styles.color);
        } else {
            e.target.classList.remove(styles.color);
        }
    }
    return (
        <>

            <header>
                <nav className={`${styles.topmenu} ${styles.fixed}`} >
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            {/* <NavLink to="/" ><img src={Logo} alt="logo" /></NavLink> */}
                            <NavLink to="/" ><p>Groovy</p></NavLink>
                        </div>
                        <div className={styles.text}>
                            <Link to="/" className={styles.navitem}>Home</Link>
                            <Link to="/about" className={styles.navitem}>About</Link>
                            <div className={styles.dropdownContainer}>
                                <Link to="/shop" className={styles.navitem}>Shop</Link>
                                <div className={styles.dropdownContent}>
                                    <Link to="/services/OfficeCleaning" className={styles.dropdownItem}>DropDown 1</Link>
                                    <Link to="/services/Housecleaning" className={styles.dropdownItem}>DropDown 2</Link>

                                </div>
                            </div>
                            <Link to="/contact" className={styles.navitem}>Contact US</Link>
                            {/* <Link to="/bookNow" className={`${styles.navitem} `} id={styles.button}>Book Now
                                <div className='button'>Book Now</div>
                            </Link> */}
                            {/* <div type="button" className="btn position-relative"> */}
                        </div>

                        <div className={styles.Icons}>

                            <IconContext.Provider value={{ color: "#03383c", size: "20px" }}>
                                <Link to="#" className={styles.menubars}>
                                    <FaIcons.FaBars onClick={showSidebar} />
                                </Link>
                                <Link to="/" className={styles.navitem} style={{ position: 'relative' }} ><FaIcons.FaRegHeart />
                                    <span className="position-absolute  translate-middle badge rounded-pill" style={{ backgroundColor: "#7e8865", color: '#d9dfd7', fontSize: '8px', top: '13%', right: '-80%' }}>
                                        0
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                                <Link to="/" className={styles.navitem}><FiIcons.FiSearch /></Link>
                                <Link to="/" className={styles.navitem} style={{ position: 'relative' }}><AiIcons.AiOutlineShoppingCart />
                                    <span className="position-absolute  translate-middle badge rounded-pill" style={{ backgroundColor: "#7e8865", color: '#d9dfd7', fontSize: '8px', top: '13%', right: '-80%' }}>
                                        0
                                        <span class="visually-hidden">unread messages</span>
                                    </span>
                                </Link>
                            </IconContext.Provider>
                        </div>
                    </div>
                </nav>
                <nav className={`${sidebar ? `${styles.navmenu} ${styles.active}` : styles.navmenu}`}>
                    <ul className={styles.navMenuItems}>
                        <li className={styles.navbarToggle}>
                            <IconContext.Provider value={{ color: '#03383c' }}>
                                <Link to='#' className={styles.menubars} onClick={showSidebar}>
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </IconContext.Provider>
                        </li>
                        <li>
                            <div className={styles.listitem} onClick={handleClickWho}>
                                <span>Who we are </span>
                                <FaIcons.FaGreaterThan />
                            </div>
                            <div className={`${styles.dropdownCContent} ${dropdownwho ? styles.Aactive : ''}`}>
                                <ul>
                                    <li className={styles.droplistitem}><Link to='/house-cleaning'>Our Story</Link></li>
                                    <li className={styles.droplistitem}><Link to='/door-cleaning'>Our Team</Link> </li>
                                    <li className={styles.droplistitem}> <Link to='/door-cleaning'>Our Mission</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styles.listitem} onClick={handleDropdownCclick} >
                                <span>Shop </span>
                                <FaIcons.FaGreaterThan />
                            </div>
                            <div className={`${styles.dropdownCContent} ${dropdownVisible ? styles.Aactive : ''}`}>
                                <ul>
                                    <li className={styles.droplistitem}><Link to='/One-Off Cleaning Services'>One-Off Cleaning Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/Regular Cleaning Services'>Regular Cleaning Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/Additional Cleaning Services'>Additional Cleaning Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/One-Off Cleaning Services'>Anti Viral And Disinfectant Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/One-Off Cleaning Services'>End of Lease Cleaning Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/One-Off Cleaning Services'>Office Cleaning Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/One-Off Cleaning Services'>Steam/Carpet Cleaning Services</Link></li>
                                    <li className={styles.droplistitem}><Link to='/One-Off Cleaning Services'>Glass Cleaning Services</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className={styles.listitem}>
                                <Link to='/'>
                                    <span>Where we clean </span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.listitem}>
                                <Link to='/'>
                                    <span>Jobs</span>
                                </Link>
                            </div>
                        </li>
                        <li>
                            <div className={styles.listitem} onClick={handleClickHelp}>
                                <span>Help</span>
                                <FaIcons.FaGreaterThan />
                            </div>
                            <div className={`${styles.dropdownCContent} ${dropdownHelp ? styles.Aactive : ''}`}>
                                <ul>
                                    <li className={styles.droplistitem}><Link to='/Contact Us'>Contact Us</Link></li>
                                    <li className={styles.droplistitem}><Link to='/FAQ'>FAQ</Link></li>
                                </ul>
                            </div>
                        </li>

                        {/* {SidebarDate.map((item, index) => {
                                return (
                                    <li key={index} className={styles.navText}>
                                        {item.title !== "Services" ? (
                                            <Link to={item.path}>
                                                {item.icon}
                                                <span>{item.title}</span>
                                            </Link>
                                        ) : null}
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })} */}
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Navbar
