import AddTutor from '@/component/AddTutor';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export const metadata = {
    title: "Tutor Finder | Add Tutor",
};

const AddTutorsPage =async () => {

    const {user} = await auth.api.getSession({
        headers: await headers(),
    });
    console.log(user)

    return (
        <div>
            <AddTutor user={user} />
        </div>
    );
};

export default AddTutorsPage;