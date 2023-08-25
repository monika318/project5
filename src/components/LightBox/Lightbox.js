import React, { useState } from 'react'
// import image1 from '../../images/_MG_6920.jpg'
// import image2 from '../../images/_MG_6921.jpg'
// import image3 from '../../images/_MG_6922.jpg'
// import image4 from '../../images/_MG_6923.jpg'
// import img1 from '../../../public/Laxman_6KHQ/_MG_6921.jpg'
import PRODUCTS from '../../Product.json';
import styles from './LightBox.module.css'

const Lightbox = (props) => {
    // const { id } = props
    // const imageArray = props.imgArray;
    // const product = PRODUCTS.find(product => product.id === id);
    const [mainDiv, setmainDiv] = useState(props.img)
    // const imageStyles = {
    //     borderRadius: "10px",
    //     backgroundPosition: 'center',
    //     backgroundSize: 'contain',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundImage: `url(${product.imgArray[1]})`,
    // }
    return (
        <>
            <div className={styles.ImageDiv}>
                <img src={mainDiv} alt="mainDiv" key={props.img} />
                <div className={styles.smallImages}>
                    {props.imgArray.map((img, index) => {
                        return (
                            <img src={img} alt="mainDiv" className={mainDiv === img ? styles.active : styles.smallimg} onClick={() => setmainDiv(img)} key={index} />
                        )
                    })}
                </div >
            </div>
        </>
    )
}
{/* <div className={styles.imageDive} style={imageStyles}></div> */ }

export default Lightbox
