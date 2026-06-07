import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import MyBookData from './MyBookData';

const MyBookedTable = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });

    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/enrollment/${session?.user?.id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: 'no-store',
        }
    );

    const enrollment = await res.json();
    console.log(enrollment)

    // console.log('Enrollment Data:', enrollment);
    // console.log('Total:', enrollment?.length);

    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content
                        aria-label="Booked Courses"
                        className="min-w-[900px]"
                    >
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Phone</Table.Column>
                            <Table.Column>Tutor Name</Table.Column>
                            <Table.Column>Email</Table.Column>
                            <Table.Column>Status</Table.Column>
                            <Table.Column>Cancel</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {enrollment?.length > 0 ? (
                                enrollment.map((enroll, index) => (
                                    <MyBookData key={enroll._id || index} enroll={enroll} />
                                ))
                            ) : (
                                <Table.Row>
                                    <Table.Cell>No bookings found</Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                    <Table.Cell></Table.Cell>
                                </Table.Row>
                            )}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyBookedTable;