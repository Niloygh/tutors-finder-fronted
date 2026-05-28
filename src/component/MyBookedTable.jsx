import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const MyBookedTable = async () => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    
    
    return (
        <div>
            <Table>
                <Table.ScrollContainer>
                    <Table.Content aria-label="Team members" className="min-w-[600px]">
                        <Table.Header>
                            <Table.Column isRowHeader>Name</Table.Column>
                            <Table.Column>Phone</Table.Column>
                            <Table.Column>Tutor Name</Table.Column>
                            <Table.Column>Email</Table.Column>
                            <Table.Column>Status Date</Table.Column>
                            <Table.Column>Cancel</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Kate Moore</Table.Cell>
                                <Table.Cell>01970000000</Table.Cell>
                                <Table.Cell>Unknown</Table.Cell>
                                <Table.Cell>kate@acme.com</Table.Cell>
                                <Table.Cell>active</Table.Cell>
                                <Table.Cell><Button  variant='outline'><IoIosCloseCircleOutline/> </Button></Table.Cell>
                            </Table.Row>

                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyBookedTable;