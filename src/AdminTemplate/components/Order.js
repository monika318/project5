import React, { useState } from 'react'
import DataTable from 'react-data-table-component'
import styles from './Order.module.css'
import styles1 from './Products/tableOwn.module.css'
import Modal from '../../components/Modal/Modal'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { createPortal } from 'react-dom'

const Order = () => {
    const customStyles = {
        // rows: {
        //     style: {
        //         paddingLeft: '10px',
        //         paddingRight: '10px' // override the row height
        //     },
        // },
        headCells: {
            style: {
                paddingLeft: '6px', // override the cell padding for head cells
                paddingRight: '2px',
            },
        },
        cells: {
            style: {
                paddingLeft: '6px', // override the cell padding for data cells
                paddingRight: '2px',
            },
        },
    };
    const QuantitySort = (rowA, rowB) => {
        const a = Number(rowA.quantity);
        const b = Number(rowB.quantity);
        if (a > b) {
            return 1;
        }

        if (b > a) {
            return -1;
        }
        return 0;
    }
    const PriceSort = (rowA, rowB) => {
        const a = Number(rowA.totalPrice);
        const b = Number(rowB.totalPrice);
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }
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
    const columns = [
        {
            name: '#',
            selector: row => row.sn,
            sortable: true,
            width: '4%',

        },
        {
            name: 'Customer Name',
            selector: row => row.name,
            sortable: true,
            minWidth: '130px'
        },
        {
            name: 'SKU',
            selector: row => row.sku,
            width: '8%',
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.quantity,
            width: '8%',
            sortable: true,
            sortFunction: QuantitySort,
        },
        {
            name: 'Total Price',
            selector: row => row.totalPrice,
            sortable: true,
            width: '10%',
            sortFunction: PriceSort,
        },
        {
            name: 'Payment Status',
            selector: row => row.paymentStatus,
            width: '10%'
        },
        {
            name: 'Payment Method',
            selector: row => row.paymentMethod,
            width: '11%'
        },
        {
            name: 'Status',
            selector: row => row.status,
            width: '8%'
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
                <button
                    className="btn btn-outline btn-xs"
                    onClick={(e) => handleButtonClick(e, row.id)}
                    style={{ color: 'red', fontSize: '20px' }}
                >
                    <RiDeleteBin5Line />
                </button>
            ),
            minWidth: '8%'
        }

    ]
    const ExpandedComponent = ({ data }) => {
        return (<>
            <div className={styles.Expandable}>
                <p>Name : {data.name}</p>
                <p>Product SKU : {data.sku}</p>
                <p>Quantity : {data.quantity}</p>
                <p>Total Price : {data.totalPrice}</p>
                <p>Payment Status : {data.paymentStatus}</p>
                <p>Payment Method : {data.paymentMethod}</p>
                <p>Status : {data.status}</p>
                <p>Created : {data.created}</p>
            </div>
            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </>
        )
    }
    const data = [
        {
            sn: '1',
            id: 1,
            name: 'Monika Shakya',
            sku: 'KS93528TUT',
            quantity: '10',
            totalPrice: '1000',
            paymentStatus: 'Done',
            paymentMethod: 'COD',
            status: 'active',
            created: 'August 23, 2023 2:00 PM'
        },
        {
            sn: '2',
            id: 2,
            name: 'Siddhu Khanal',
            sku: 'KS93528TUT',
            quantity: '10',
            totalPrice: '800',
            paymentStatus: 'Done',
            paymentMethod: 'COD',
            status: 'active',
            created: 'August 21, 2023 3:00 PM'
        },
        {
            sn: '3',
            id: 3,
            name: 'Achyut Rimal',
            sku: 'KS93528TUT',
            quantity: '8',
            totalPrice: '1500',
            paymentStatus: 'Done',
            paymentMethod: 'COD',
            status: 'active',
            created: 'August 2, 2023 1:00 PM'
        },
        {
            sn: '4',
            id: 4,
            name: 'Sagar K.C',
            sku: 'KS93528TUT',
            quantity: '20',
            totalPrice: '5500',
            paymentStatus: 'Done',
            paymentMethod: 'COD',
            status: 'active',
            created: 'July 2, 2022 6:00 PM'
        },
        {
            sn: '5',
            id: 5,
            name: 'Ajay Roy',
            sku: 'KS93528TUT',
            quantity: '2',
            totalPrice: '500',
            paymentStatus: 'Done',
            paymentMethod: 'COD',
            status: 'active',
            created: 'July 24, 2023 8:00 AM'
        },
        {
            sn: '6',
            id: 6,
            name: 'Tulashi Khatri',
            sku: 'KS93528TUT',
            quantity: '12',
            totalPrice: '5900',
            paymentStatus: 'Done',
            paymentMethod: 'COD',
            status: 'active',
            created: 'January 24, 2023 12:00 PM'
        },

    ]
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
        <div className={styles.Orders}>
            {modalOpen && createPortal(
                <Modal
                    onClose={handleCloseButton}
                    widthProp='30%'>
                    <div className={styles1.ModalDiv}>
                        <h1>Confirm Delete</h1>
                        <p>Are you sure to delete <strong>{selectedRow}</strong>?</p>
                        <button className={styles1.ModalButton} onClick={() => setModalOpen(false)}>Yes</button>
                    </div>
                </Modal>,
                document.body
            )}
            <div className={styles.Topbar}>
                <div className={styles.Heading}>
                    <h6>Orders</h6>
                </div>
                <div className={styles.Button}>
                    <div className={styles.search}>
                        {/* <IconContext.Provider value={{ size: '30px', color: 'grey' }}>
                            <GrFormSearch />
                        </IconContext.Provider> */}
                        <input type='text' onChange={handleFilter} placeholder='Search By Name ..' />
                    </div>
                    {/* <button>Create Order</button> */}
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
        </div>
    )
}

export default Order
