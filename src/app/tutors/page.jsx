
import { AvailableTutorCard } from '@/component/home/AvailableTutorCard';
import SearchInput from '@/component/SearchInput';
import { allTutors } from '@/lib/dataFetch';
import React from 'react';

const TutorPage = async () => {
    const tutors = await allTutors()
    return (
        <div className='my-10 px-10'>
            <h1 className='text-center font-bold text-3xl pb-10'>All Tutors</h1>

            {/* search  */}
            <div className="my-10">
                <SearchInput />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    tutors.map(tutor => <AvailableTutorCard key={tutor._id} tutor={tutor} />)
                }

            </div>

        </div>
    );
};

export default TutorPage;