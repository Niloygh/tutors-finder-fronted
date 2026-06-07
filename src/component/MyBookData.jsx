'use client'

import { Button, Table } from '@heroui/react';
import React, { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const MyBookData = ({ enroll }) => {

    const [active, setActive] = useState(true)

        const handleDelete = async () => {
            const res = await fetch(
                `http://localhost:8000/enrollment/cancel/${enroll._id}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const data = await res.json();

            if (data.modifiedCount > 0) {
                setActive(false);
            }
        };



    return (
        <Table.Row>
            <Table.Cell>
                {enroll.studentName}
            </Table.Cell>
            <Table.Cell>
                {enroll.studentNumber}
            </Table.Cell>
            <Table.Cell>
                {enroll.tutorName}
            </Table.Cell>
            <Table.Cell>
                {enroll.studentEmail}
            </Table.Cell>
            <Table.Cell>
                {enroll.status}
            </Table.Cell>
            <Table.Cell>
                <Button
                    variant="danger-soft"
                    className={'rounded-full'}
                    onClick={handleDelete}
                    disabled={!active}
                >
                    <IoIosCloseCircleOutline size={20} />
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyBookData;