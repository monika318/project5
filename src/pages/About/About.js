import React from 'react'
import styles from './About.module.css'
import TopBanner from '../../components/TopBanner/TopBanner'
import { TfiYoutube } from 'react-icons/tfi'
import * as BiIcons from 'react-icons/bi'
import TeamA from '../../images/TeamA.webp'
import TeamB from '../../images/TeamB.webp'
import TeamC from '../../images/TeamC.webp'
import TeamD from '../../images/TeamD.webp'
import ProductA from '../../images/product6Copy.webp'
import ProductB from '../../images/Bag2.webp'
import ProductC from '../../images/Component2.webp'
import ProductD from '../../images/product7.webp'
import Testimonials from '../../components/Home/Testimonials'
import Button from '../../components/Button/Button'
import Counter from '../../components/About/Counter'
import GroupPhoto from '../../images/groupPhoto.webp'


const About = () => {
    return (
        <div className={styles.About} >
            <TopBanner Pagename="About" PageLink="/about" />
            <div className={styles.AboutCompany}>
                <div className={styles.AboutText}>
                    <h1>Our Company</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa odio perspiciatis maxime cum. Vero asperiores magni quo, ipsum doloribus veniam tempora architecto illo sed blanditiis odit odio perspiciatis nobis. Distinctio, suscipit harum architecto nostrum et ad voluptates saepe obcaecati ipsa assumenda, necessitatibus laboriosam amet rem. Iste, soluta blanditiis quia ipsam ullam officia enim .</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa odio perspiciatis maxime cum. Vero asperiores magni quo, ipsum doloribus veniam tempora architecto illo sed blanditiis odit odio perspiciatis nobis. Distinctio, suscipit harum architecto nostrum et ad voluptates saepe obcaecati ipsa assumenda, necessitatibus laboriosam amet rem. Iste, soluta blanditiis quia ipsam ullam officia enim .</p>
                </div>
                <div className={styles.AboutImage}>
                    <img src={GroupPhoto} alt="grp imag" />
                    <div className={styles.overlayTwo}></div>
                </div>
            </div>
            <Counter />
            <div className={styles.Production}>
                <h1>Handmade</h1>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <div className={styles.gridContainer}>
                    <div className={`${styles.gridItem} ${styles.firstItem}`}>
                        <img src={ProductD} alt='product1' />
                        <div className={styles.GridOverlay}>
                            <div className={styles.GridText}>
                                <h2>Onesie</h2>
                                <Button name="View Shop" action="/shop" width='50%' />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.gridItem} ${styles.secondItem}`}>
                        <img src={ProductC} alt='product1' />
                        <div className={styles.GridOverlay}>
                            <div className={styles.GridText}>
                                <h2>Bags</h2>
                                <Button name="View Shop" action="/shop" width='50%' />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.gridItem} ${styles.thirdItem}`}>
                        <img src={ProductB} alt='product1' />
                        <div className={styles.GridOverlay}>
                            <div className={styles.GridText}>
                                <h2>Bags</h2>
                                <Button name="View Shop" action="/shop" width='50%' />
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.gridItem} ${styles.fourthItem}`}>
                        <img src={ProductA} alt='product1' />
                        <div className={styles.GridOverlay}>
                            <div className={styles.GridText}>
                                <h2>Bottoms</h2>
                                <Button name="View Shop" action="/shop" width='50%' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials />
            <div className={styles.OurTeam}>
                <h1>Our Team</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et tempore sit, iste doloremque error, repellat nisi sunt hic dolore magni laborum excepturi rerum corrupti.</p>
                <div className={styles.TeamMembers}>
                    <div className={styles.Card}>
                        <div className={styles.Cardimage}>
                            <div className={styles.overlay}>
                            </div>
                            <div className={styles.Icons}>
                                <div className={styles.container}>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoFacebook />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoTwitter />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoPinterest />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <TfiYoutube />
                                    </div>
                                </div>
                            </div>
                            <img src={TeamA} alt='TeamA' />
                        </div>
                        <div className={styles.Cardtext}>
                            <h3>Name One</h3>
                            <p>Post One</p>
                        </div>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.Cardimage}>
                            <div className={styles.overlay}>
                            </div>
                            <div className={styles.Icons}>
                                <div className={styles.container}>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoFacebook />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoTwitter />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoPinterest />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <TfiYoutube />
                                    </div>
                                </div>
                            </div>
                            <img src={TeamB} alt='TeamA' />
                        </div>
                        <div className={styles.Cardtext}>
                            <h3>Name Two</h3>
                            <p>Post Two</p>
                        </div>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.Cardimage}>
                            <div className={styles.overlay}>
                            </div>
                            <div className={styles.Icons}>
                                <div className={styles.container}>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoFacebook />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoTwitter />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoPinterest />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <TfiYoutube />
                                    </div>
                                </div>
                            </div>
                            <img src={TeamC} alt='TeamA' />
                        </div>
                        <div className={styles.Cardtext}>
                            <h3>Name Three</h3>
                            <p>Post Three</p>
                        </div>
                    </div>
                    <div className={styles.Card}>
                        <div className={styles.Cardimage}>
                            <div className={styles.overlay}>
                            </div>
                            <div className={styles.Icons}>
                                <div className={styles.container}>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoFacebook />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoTwitter />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <BiIcons.BiLogoPinterest />
                                    </div>
                                    <div className={styles.IndiIcons}>
                                        <TfiYoutube />
                                    </div>
                                </div>
                            </div>
                            <img src={TeamD} alt='TeamA' />
                        </div>
                        <div className={styles.Cardtext}>
                            <h3>Name Four</h3>
                            <p>Post Four</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
