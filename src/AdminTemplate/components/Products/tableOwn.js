import React, { useMemo, useState } from 'react';
import {
    // eslint-disable-next-line
    MRT_Table, // Import the specific MRT components you need
    // eslint-disable-next-line
    MRT_TableHead,
    // eslint-disable-next-line
    MRT_TableHeadCell,
    useMantineReactTable,
} from 'mantine-react-table';
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'
import { MantineReactTable } from 'mantine-react-table';
import styles from './tableOwn.module.css'
import { createPortal } from 'react-dom'
import Modal from '../../../components/Modal/Modal'
const date = new Date();
const formattedDateTime = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true // Set this to true for 12-hour format, or false for 24-hour format
});
const withoutAt = formattedDateTime.replace(' at', '');

// eslint-disable-next-line
const Button = (props) => {
    const { pskc } = props
    return (
        <div className={styles.tableButton}>
            <div className={styles.edit} onClick={() => props.delete(pskc)}><BiEdit /></div>
            <div className={styles.delete} onClick={() => console.log('Button clicked')}><RiDeleteBinLine /></div>
        </div>
    )
}

const TableOwn = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const handleButtonClick = (value) => {
        setModalOpen(true)
        console.log('true')
    }
    // delete={setModalOpen(true)} 
    // eslint-disable-next-line
    const { modalOpenTable } = props;
    const data = [
        {
            id: 1,
            name: {
                ProductName: 'Monika',
                lastName: 'Davis',
            },
            price: 200,
            created: withoutAt,
            action: "do",
        },
        {
            id: 2,
            name: {
                ProductName: 'Robert',
                lastName: 'Smith',
            },
            price: 500,
            address: '566 Brakus Inlet',
            created: 'August 21, 2023 3:00 PM',
            action: "do",
        },
        {
            id: 3,
            name: {
                ProductName: 'Kevin',
                lastName: 'Yan',
            },
            price: 300,
            address: '7777 Kuhic Knoll',
            created: 'August 21, 2023 2:00 PM',
            action: "do",
        },
        {
            id: 4,
            name: {
                ProductName: 'John',
                lastName: 'Upton',
            },
            price: 10,
            address: '722 Emie Stream',
            created: 'August 20, 2023 2:00 PM',
            action: "do",
        },
        {
            id: 5,
            name: {
                ProductName: 'Nathan',
                lastName: 'Harris',
            },
            price: 5000,
            address: '1 Kuhic Knoll',
            created: 'August 27, 2023 2:00 PM',
            action: "do",
        },
        {
            id: 6,
            name: {
                ProductName: 'Nathan',
                lastName: 'Harris',
            },
            price: 2000,
            address: '1 Kuhic Knoll',
            created: 'August 27, 2023 2:00 PM',
            action: "do ",
        },
        {
            id: 7,
            name: {
                ProductName: 'Nathan',
                lastName: 'Harris',
            },
            price: 50,
            address: '1 Kuhic Knoll',
            created: 'August 27, 2023 2:00 PM',
            action: "do",
        },
    ];
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: '#',
            },
            {
                accessorKey: 'name.ProductName',
                header: 'Name',
            },
            {
                accessorKey: 'price', // normal accessorKey
                header: 'Price',
            },
            {
                accessorKey: 'created',
                header: 'Created',
            },
            {
                accessorKey: 'action',
                header: 'Action',
            },
        ],
        []
    );

    const table = useMantineReactTable({
        columns,
        data, // must be memoized or stable (useaction, useMemo, defined outside of this component, etc.)
    });

    return (
        <>
            <MantineReactTable table={table} />
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
                            <p>Are you sure to delete <strong>this</strong>?</p>
                            <button className={styles.ModalButton} onClick={() => setModalOpen(false)}>Yes</button>
                        </div>
                    </Modal>,
                    document.body
                )}

        </>
    )

};

export default TableOwn;


{/* <MRT_Table table={table}>
                <MRT_TableHead>
                    {columns.map((column) => (
                        <MRT_TableHeadCell key={column.accessorKey}>
                            {column.header}
                        </MRT_TableHeadCell>
                    ))}
                </MRT_TableHead>
                {/* Render the table body, rows, and cells here 
            </MRT_Table> */}




