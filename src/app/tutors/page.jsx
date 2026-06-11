
import { AvailableTutorCard } from '@/component/home/AvailableTutorCard';
import SearchInput from '@/component/SearchInput';
import { allTutors } from '@/lib/dataFetch';
import React from 'react';


export const metadata = {
    title: "Tutor Finder | Tutors Page",
};


const TutorPage = async ({ searchParams }) => {
    const sParams = await searchParams

    const search =  sParams?.searchItem || '';
    const startDate =  sParams?.startDate;
    const endDate =  sParams?.endDate;

    const tutors = await allTutors(search, startDate, endDate);

    

    console.log(sParams)


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