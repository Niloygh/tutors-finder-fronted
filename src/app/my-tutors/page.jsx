import TablePage from '@/component/MyTutors';
import React from 'react';

export const metadata = {
  title: "Tutor Finder | My Tutor",
};


const MyTutorsPage = () => {
    return (
        <div>

            <h1 className='font-bold text-3xl py-10 text-center'>My Tutors</h1>
            
            <TablePage />
        </div>
    );
};

export default MyTutorsPage;