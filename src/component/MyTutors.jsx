import { myTutors } from '@/lib/dataFetch';
import React from 'react';
import MyAllTutor from './MyAllTutor';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const TablePage = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    
    
    const tutors = await myTutors(session?.user?.email)
    // console.log(tutors)
    

    return (
        <div>
            <MyAllTutor tutors={tutors} />
        </div>
    );
};

export default TablePage;