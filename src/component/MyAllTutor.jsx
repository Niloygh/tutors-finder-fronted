"use client"
import { authClient } from '@/lib/auth-client';
import { Table } from '@heroui/react';
import React from 'react';
import MyTuitions from './MyTuitions';

const MyAllTutor = ({tutors}) => {
    const userData = authClient.useSession()
    const user = userData.data?.user
    
    // console.log(user?.email)

    
    // const myAllData = tutors.filter(tutor=> tutor.userEmail === user?.email)
    // console.log(myAllData)
    
    return (
        <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Tutor Name</Table.Column>
                            <Table.Column>Subject</Table.Column>
                            <Table.Column>Available</Table.Column>
                            <Table.Column>Hourly Fee</Table.Column>
                            <Table.Column>Total Slot</Table.Column>
                            <Table.Column>Registration Date</Table.Column>
                            <Table.Column>Action</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {
                                tutors.map((myData)=> <MyTuitions key={myData._id} myData={myData} />)
                            }

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
    );
};

export default MyAllTutor;