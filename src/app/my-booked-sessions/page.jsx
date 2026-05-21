import MyBookedTable from '@/component/MyBookedTable';
import React from 'react';

const MyBookedPage = () => {
    return (
        <div>

            <h1 className='font-bold text-3xl py-10 text-center'>My Tutors</h1>
            
            <MyBookedTable />
        </div>
    );
};

export default MyBookedPage;