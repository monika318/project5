import React, { useState } from 'react'
import Slider from '../components/Slider/Slider'
// eslint-disable-next-line
import image1 from '../images/TeamD.jpg'
// eslint-disable-next-line
import image2 from '../images/TeamB.jpg'
// eslint-disable-next-line
import image3 from '../images/TeamC.jpg'
import Modal from '../components/Modal/Modal'
import { createPortal } from 'react-dom'

const Checkout = () => {
    const slides = [
        {
            url: 'http://localhost:3000/static/media/TeamD.c395342980e6abe51e79.jpg',
            title: 'Product1'
        },
        {
            url: 'http://localhost:3000/static/media/TeamB.a22ad74752d8915892d0.jpg',
            title: 'Product2'
        },
        {
            url: 'http://localhost:3000/static/media/TeamC.3e6db85bc2a86a89a21a.jpg',
            title: 'Product3'
        }
    ]
    const containerSlides = {
        width: "500px",
        height: "280px",
        margin: "0 auto 2em auto"
    }
    const [modalOpen, setModalOpen] = useState(false);
    // const [message, setMessage] = useState('');
    // setMessage(value)

    const handleButtonClick = (value) => {
        setModalOpen(false)
    }
    return (
        <div style={{ marginTop: '150px', textAlign: 'center' }}>
            <h1>Image Slider</h1>
            <div style={containerSlides}>
                <Slider slides={slides} />
            </div>
            <h1>Modal</h1>
            {/* {message} */}
            <button onClick={() => setModalOpen(true)}>Open</button>
            {modalOpen &&
                createPortal(
                    <Modal
                        onClose={handleButtonClick}
                        onSubmit={handleButtonClick}
                        onCancel={handleButtonClick}
                    >
                        <h1>This is a modal</h1>
                        <br />
                        <p>This is the modal description</p>
                    </Modal>,
                    document.body
                )}
        </div >
    )
}

export default Checkout
