import React, { useState } from 'react'
import styles from './Product.module.css'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBin5Line } from 'react-icons/ri'
// eslint-disable-next-line
import { IconContext } from 'react-icons'
// eslint-disable-next-line
import { createPortal } from 'react-dom'
import styles1 from './tableOwn.module.css'
import Modal from '../../../components/Modal/Modal'
import { Link } from 'react-router-dom'
// import TableOwn from './tableOwn'
import DataTable from 'react-data-table-component'


const Products = () => {
    const customStyles = {
        // rows: {
        //     style: {
        //         paddingLeft: '10px',
        //         paddingRight: '10px' // override the row height
        //     },
        // },
        headCells: {
            style: {
                paddingLeft: '8px', // override the cell padding for head cells
                paddingRight: '2px',
            },
        },
        cells: {
            style: {
                paddingLeft: '8px', // override the cell padding for data cells
                paddingRight: '2px',
            },
        },
    };
    const parseCustomDate = dateString => {
        const dateParts = dateString.split(' ');
        const month = dateParts[0];
        const day = parseInt(dateParts[1].replace(',', ''), 10);
        const year = parseInt(dateParts[2], 10);
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        const timeParts = dateParts[3].split(':');
        let hours = parseInt(timeParts[0], 10);
        const minutes = parseInt(timeParts[1], 10);
        if (dateParts[4] === 'PM' && hours !== 12) {
            hours += 12;
        }
        return new Date(year, months.indexOf(month), day, hours, minutes);
    };
    const DateSort = (rowA, rowB) => {
        const a = parseCustomDate(rowA.created);
        const b = parseCustomDate(rowB.created);
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }
    const PriceSort = (rowA, rowB) => {
        const a = Number(rowA.price);
        const b = Number(rowB.price);
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }
    const InventorySort = (rowA, rowB) => {
        const a = Number(rowA.inventory);
        const b = Number(rowB.inventory);
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }
    const ExpandedComponent = ({ data }) => {
        return (<>
            <div className={styles.Expandable}>
                <p>Product Name : {data.name}</p>
                <p>Price : {data.price}</p>
                <p>Inventory : {data.inventory}</p>
                {/* <p>Status : {data.status}</p> */}
                <p>Created : {data.created}</p>
            </div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
        )
    }
    const columns = [
        {
            name: '#',
            selector: row => row.sn,
            sortable: true,
            width: '5%',
        },
        {
            name: 'Product Name',
            selector: row => row.name,
            sortable: true,
            width: '20%',
        },
        {
            name: 'SKU',
            selector: row => row.sku,
            width: '15%',
            sortable: true,
        },
        {
            name: 'Price',
            selector: row => row.price,
            width: '13%',
            sortable: true,
            sortFunction: PriceSort,
        },
        {
            name: 'Inventory',
            selector: row => row.inventory,
            sortable: true,
            width: '13%',
            sortFunction: InventorySort,
        },

        {
            name: 'Created',
            selector: row => row.created,
            width: '20%',
            sortFunction: DateSort,
        },
        {
            name: "Actions",
            button: true,
            cell: (row) => (
                <>
                    <Link to='/dashboard/add_product'>
                        <button
                            className="btn btn-outline btn-xs"
                            // onClick={(e) => handleButtonClick(e, row.id)}
                            style={{ color: 'green', fontSize: '20px' }}
                        >
                            <BiEdit />
                        </button>
                    </Link>
                    <button
                        className="btn btn-outline btn-xs"
                        onClick={(e) => handleButtonClick(e, row.id)}
                        style={{ color: 'red', fontSize: '20px' }}
                    >
                        <RiDeleteBin5Line />
                    </button>
                </>
            ),
            minWidth: '10%'
        }

    ]
    const data = [
        {
            sn: 1,
            id: 1,
            name: "Onesie",
            price: 200,
            sku: 'KS93528TOT',
            inventory: 5,
            created: "August 21, 2023 3:00 PM",
        },
        {
            sn: 2,
            id: 2,
            name: 'Bags',
            sku: 'KS93528TUT',
            price: 500,
            inventory: 20,
            created: 'August 21, 2023 3:00 PM',
        },
        {
            sn: 3,
            id: 3,
            name: 'T-Shirt',
            price: 300,
            sku: 'KS93528TUT',
            inventory: 30,
            created: 'August 21, 2023 2:00 PM',
        },
        {
            sn: 4,
            id: 4,
            name: 'Pants',
            price: 10,
            sku: 'KS93528TUT',
            inventory: 5,
            created: 'August 20, 2023 2:00 PM',
        },
        {
            sn: 5,
            id: 5,
            name: 'Shorts',
            price: 5000,
            sku: 'KS93528TUT',
            inventory: 1,
            created: 'August 27, 2023 2:00 PM',
        },
        {
            sn: 6,
            id: 6,
            name: 'JumpSuits',
            price: 2000,
            sku: 'KS93528TUT',
            inventory: 0,
            created: 'August 27, 2023 2:00 PM',
        },
        {
            sn: 7,
            id: 7,
            name: 'Purse',
            price: 50,
            sku: 'KS93528TUT',
            inventory: 100,
            created: 'August 27, 2023 2:00 PM',
        },
    ];
    const [records, setRecords] = useState(data)
    const handleFilter = (e) => {
        const newdata = data.filter(row => {
            return row.name.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setRecords(newdata)
    }
    // Modal Open For Delete

    const [modalOpen, setModalOpen] = useState(false);
    const handleCloseButton = (value) => {
        setModalOpen(false)
    }
    const [selectedRow, setselectedRow] = useState();
    const handleButtonClick = (e, id) => {
        // alert('You clicked the button')
        e.preventDefault();
        setselectedRow(id)
        setModalOpen(true)
    }
    return (
        <div className={styles.Category}>
            {modalOpen && createPortal(
                <Modal
                    onClose={handleCloseButton}
                    widthProp='30%'>
                    <div className={styles1.ModalDiv}>
                        <h1>Confirm Delete</h1>
                        <p>Are you sure to delete <strong>{selectedRow}</strong>?</p>
                        <button className={styles1.ModalButton} onClick={() => setModalOpen(false)}>Yes</button>
                    </div>
                </Modal>, document.body)
            }
            <div className={styles.Heading}>
                <h6>Products</h6>
                <div className={styles.search}>
                    <input type='text' onChange={handleFilter} placeholder='Search By Name ..' />
                    <Link to="/dashboard/add_product"><button>Add Product</button></Link>

                </div>
            </div>
            <DataTable
                columns={columns}
                data={records}
                pagination
                fixedHeader
                expandableRows
                expandableRowsHideExpander={true}
                expandOnRowClicked={true}
                expandableRowsComponent={ExpandedComponent}
                customStyles={customStyles}
            />
            {/* <TableOwn modalOpenTable={modalOpenTable} /> */}
        </div >
    )
}

export default Products
