import React, { useState } from 'react'
// import image1 from '../../images/_MG_6920.jpg'
// import image2 from '../../images/_MG_6921.jpg'
// import image3 from '../../images/_MG_6922.jpg'
// import image4 from '../../images/_MG_6923.jpg'
// import img1 from '../../../public/Laxman_6KHQ/_MG_6921.jpg'

import styles from './LightBox.module.css'

const Lightbox = (props) => {
    const imageArray = props.imgArray;
    const [mainDiv, setmainDiv] = useState(props.img)
    return (
        <>
            <div className={styles.ImageDiv}>
                <img src={mainDiv} alt="mainDiv" key={imageArray} />
                <div className={styles.smallImages}>
                    {props.imgArray.map((img, index) => {
                        return (
                            <>
                                <img src={img} alt="mainDiv" className={mainDiv === img ? styles.active : styles.smallimg} onClick={() => setmainDiv(img)} key={index} />
                            </>
                        )
                    })}
                </div >
            </div>
        </>
    )
}

export default Lightbox
