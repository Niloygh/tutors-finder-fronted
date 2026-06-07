import React from 'react';
import { AvailableTutorCard } from './AvailableTutorCard';
import { limitTutor } from '@/lib/dataFetch';

const AvailableTutors = async () => {
    const tutors = await limitTutor();

    return (
        <div className='my-10 pb-10 bg-gray-50 dark:bg-black/10 px-5 transition-colors duration-300'>
            <h1 className='text-3xl font-bold text-center py-10 text-gray-900 dark:text-white'>
                Available Tutors
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {tutors.map((tutor) => (
                    <AvailableTutorCard
                        key={tutor._id}
                        tutor={tutor}
                    />
                ))}
            </div>
        </div>
    );
};

export default AvailableTutors;