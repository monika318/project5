import React, { useState } from 'react'
import styles from './Category.module.css'
import { BiGridVertical } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { IconContext } from 'react-icons'
import { createPortal } from 'react-dom'
import Modal from '../../components/Modal/Modal'


const Category = () => {
    const [modalCategory, setmodalCategory] = useState()
    const CategoryArray = [
        {
            "id": "1",
            "name": "Bags"
        },
        {
            "id": "2",
            "name": "Pants"
        }
    ]
    //Yes no modal
    const handleButtonClick = (value) => {
        setModalOpen(false)
    }
    const handleModalOpen = (value) => {
        setmodalCategory(value)
        setModalOpen(true)

    }
    const [modalOpen, setModalOpen] = useState(false);

    //category
    const [CategorymodalOpen, setCategoryModalOpen] = useState(false);
    const handleCategoryButtonClick = (value) => {
        setCategoryModalOpen(false)
    }
    return (
        <div className={styles.Category}>
            {modalOpen &&
                createPortal(
                    <Modal
                        onClose={handleButtonClick}
                        onSubmit={handleButtonClick}
                        onCancel={handleButtonClick}
                        widthProp='30%'
                    >
                        <div className={styles.ModalDiv}>
                            <h1>Confirm Delete</h1>
                            <p>Are you sure to delete <strong>{modalCategory} </strong>?</p>
                            <button className={styles.ModalButton} onClick={() => setModalOpen(false)}>Yes</button>
                        </div>
                    </Modal>,
                    document.body
                )}
            {CategorymodalOpen &&
                createPortal(
                    <Modal
                        onClose={handleCategoryButtonClick}
                        onSubmit={handleCategoryButtonClick}
                        onCancel={handleCategoryButtonClick}
                        widthProp='40%'
                    >
                        <div className={styles.ModalDiv}>
                            <h4>Add Category</h4>
                            <form>
                                <div className={styles.form}>
                                    <label><h6>Category name:<span style={{ color: 'red' }}>*</span></h6></label>
                                    <input type='text' placeholder='Category Name' />
                                </div>
                                <button className={styles.ModalSubmitButton} onClick={() => setCategoryModalOpen(false)}>Save</button>
                            </form>
                        </div>
                    </Modal >,
                    document.body
                )}
            <div className={styles.Heading}>
                <h6>Store Categories</h6>
                <button onClick={() => setCategoryModalOpen(true)}>Add Category</button>
            </div>
            <div className={styles.table}>
                <div className={styles.tableHeading}>
                    <div className={styles.SN}>
                        #
                    </div>
                    <div className={styles.Name}>
                        Name
                    </div>
                    <div className={styles.Actions}>
                        Actions
                    </div>
                </div>
                {CategoryArray.map((category, index) => {
                    return (
                        <div className={styles.tableBody} key={index}>
                            <div className={styles.SN}>
                                <BiGridVertical />
                            </div>
                            <div className={styles.Name}>
                                {category.name}
                            </div>
                            <div className={styles.Actions}>
                                <IconContext.Provider value={{ color: 'red', size: '20px' }}>
                                    <RiDeleteBin5Line onClick={() => handleModalOpen(category.name)} />
                                </IconContext.Provider>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div >
    )
}

export default Category
