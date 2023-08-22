import React, { useState } from 'react'
import styles from './AddProduct.module.css'
import { Link } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { MultiSelect } from '@mantine/core';
import Dropzone from 'react-dropzone-uploader'
import 'react-dropzone-uploader/dist/styles.css'


const AddProduct = () => {

    const [colorData, setcolorData] = useState([
        // { value: 'red', label: 'Red' }
    ]);
    const [colorSize, setcolorSize] = useState([
        // { value: 'red', label: 'Red' }
    ]);
    const Standard = () => {
        const getUploadParams = () => {
            return { url: 'https://httpbin.org/post' }
        }

        const handleChangeStatus = ({ meta }, status) => {
            console.log(status, meta)
        }

        const handleSubmit = (files, allFiles) => {
            console.log(files.map(f => f.meta))
            allFiles.forEach(f => f.remove())
        }
        const DropzoneStyle = {
            dropzone: { minHeight: 200, maxHeight: 200 },
            color: 'black'
        }
        return (
            <Dropzone
                getUploadParams={getUploadParams}
                onChangeStatus={handleChangeStatus}
                onSubmit={handleSubmit}
                styles={DropzoneStyle}
                inputContent='Click here to upload images'
            // styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
            />
        )
    }

    const options = [
        { value: '', label: 'Select Categories', disabled: true },
        { value: 'react', label: 'React' },
        { value: 'angular', label: 'Angular' },
        { value: 'vue', label: 'Vue' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'ember', label: 'Ember' },
        // You can add more options here
    ];
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };



    return (
        <div className={styles.AddProduct}>
            <div className={styles.Topbar}>
                <div className={styles.Heading}>
                    <IconContext.Provider value={{ color: 'grey', size: "24px" }}>
                        <Link to='/dashboard/Products'><AiOutlineArrowLeft /></Link>
                    </IconContext.Provider>
                    <h6>Add Product</h6>
                </div>
                <div className={styles.Button}>
                    <button>Add</button>
                </div>
            </div>
            <div className={styles.formPart}>
                <form>
                    <div className={styles.gridContainer}>
                        <div className={styles.item1}>
                            <label><h6>Product Name<span style={{ color: 'red' }}>*</span></h6></label>
                            <input type="text" placeholder='eg. Bags' required></input>
                            <label><h6>Product Description<span style={{ color: 'red' }}>*</span></h6></label>
                            <textarea type="text" rows={3} placeholder='eg. Bags' required></textarea>
                        </div>
                        <div className={styles.item1}>
                            <label><h6>Product Images</h6></label>
                            <Standard />
                        </div>
                        <div className={styles.item1}>
                            <label><h6>Selling Price<span style={{ color: 'red' }}>*</span></h6></label>
                            <input type="number" min='0' required></input>
                            <label style={{ textDecoration: 'line-through' }}><h6>Crossed Price</h6></label>
                            <input type="number" min='0' ></input>
                            <label><h6>Cost Per Item</h6></label>
                            <input type="number" min='0' ></input>
                        </div>

                        <div className={styles.item1}>
                            <label><h6>Quantity</h6></label>
                            <input type="number" min='0' ></input>
                            <label><h6>Product sku</h6></label>
                            <input type="number" min='0' placeholder='eg. 100' ></input>
                        </div>
                        <div className={styles.item2}>
                            <MultiSelect
                                label="Color"
                                data={colorData}
                                placeholder="Create Products Colors"
                                searchable
                                creatable
                                className={styles.MultiSelect}
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setcolorData((current) => [...current, item]);
                                    return item;
                                }}
                            />
                            <MultiSelect
                                label="Size"
                                data={colorSize}
                                placeholder="Create Products Sizes"
                                searchable
                                creatable
                                className={styles.MultiSelect}
                                getCreateLabel={(query) => `+ Create ${query}`}
                                onCreate={(query) => {
                                    const item = { value: query, label: query };
                                    setcolorSize((current) => [...current, item]);
                                    return item;
                                }}
                            />
                        </div>
                        <div className={styles.item3}>
                            <label><h6>Categories</h6></label>
                            <select id="framework" name="framework" value={selectedOption} onChange={handleOptionChange}>
                                {options.map((option) => (
                                    <option key={option.value} value={option.value} disabled={option.disabled}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className={styles.Button}>
                        <button>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
