import { allTutors } from '@/lib/dataFetch';
import React from 'react';
import MyAllTutor from './MyAllTutor';

const TablePage = async () => {
    const tutors = await allTutors()
    // console.log(tutors)





    return (
        <div>
            <MyAllTutor tutors={tutors} />
        </div>
    );
};

export default TablePage;