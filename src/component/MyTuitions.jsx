import { Button, Table } from '@heroui/react';
import React from 'react';
import { UpDateModal } from './UpDateModal';
import { TrashBin } from '@gravity-ui/icons';

const MyTuitions = ({ myData }) => {
    // console.log(myData._id)

    const handleDelete = async (id) => {
        // console.log(id)
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
            method: 'DELETE'
        })
        const data = await res.json();

        if (data.deletedCount > 0) {
            alert("Tutor deleted successfully");
            window.location.reload()
        }
    }



    const formattedDate = new Date(myData?.regDate).toLocaleDateString(
        "en-US",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
        }
    );
    // console.log(formattedDate)

    return (
        <Table.Row>
            <Table.Cell>{myData.name}</Table.Cell>
            <Table.Cell>{myData.category}</Table.Cell>
            <Table.Cell>On</Table.Cell>
            <Table.Cell>{myData.hourly_rate}</Table.Cell>
            <Table.Cell>{myData.remaining_slot}</Table.Cell>
            <Table.Cell>{formattedDate}</Table.Cell>
            <Table.Cell className={'flex justify-center items-center gap-2'}>
                <UpDateModal myData={myData} />
                <Button
                    onClick={() => handleDelete(myData._id)}
                    variant='danger'>
                    <TrashBin />
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyTuitions;