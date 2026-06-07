import MyBookedTable from '@/component/MyBookedTable';
import React from 'react';

export const metadata = {
  title: "Tutor Finder | My Book Sessions",
};


const MyBookedPage = () => {
    return (
        <div>

            <h1 className='font-bold text-3xl py-10 text-center'>My Booked Session</h1>
            
            <MyBookedTable />
        </div>
    );
};

export default MyBookedPage;