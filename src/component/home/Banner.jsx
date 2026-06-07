'use client'

import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='md:px-5'>

            <Swiper
                navigation
                pagination={true} modules={[Pagination, Navigation]}
                className="mySwiper">

                <SwiperSlide><div className="relative h-120 bg-[url('/image/banner1.jpg')] bg-cover bg-center text-white flex flex-col justify-center items-center">

                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10 flex flex-col items-center space-y-5">

                        <h1 className='text-5xl font-bold'>
                            Find the Perfect Tutor for Your Success
                        </h1>

                        <p className='text-lg'>
                            Personalized learning made easy with expert tutors anytime, anywhere.
                        </p>

                        <Link href={'/tutors'} >
                            <Button color="primary" className={'bg-cyan-500 px-8 py-4'} >All Tutors</Button>                        </Link>
                    </div>

                </div></SwiperSlide>


                <SwiperSlide><div className="relative h-120 bg-[url('/image/banner2.jpg')] bg-cover bg-center text-white flex flex-col justify-center items-center">

                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10 flex flex-col items-center space-y-5">

                        <h1 className='text-5xl font-bold'>
                            Smart Tutor Booking Made Simple
                        </h1>

                        <p className='text-lg'>
                            Discover expert tutors, schedule sessions easily, and achieve your learning goals faster.
                        </p>

                        <Link href={'/tutors'} >
                            <Button color="primary" className={'bg-cyan-500 px-8 py-4 text-white shadow-lg'} >All Tutors</Button>
                        </Link>
                    </div>

                </div></SwiperSlide>


                <SwiperSlide><div className="relative h-120 bg-[url('/image/banner1.jpg')] bg-cover bg-center text-white flex flex-col justify-center items-center">

                    <div className="absolute inset-0 bg-black/50"></div>

                    <div className="relative z-10 flex flex-col items-center space-y-5">

                        <h1 className='text-5xl font-bold'>
                            Learn Better. Score Higher. Grow Faster.
                        </h1>

                        <p className='text-lg'>
                            Personalized tutoring sessions designed to help students succeed in every subject.
                        </p>

                        <Link href={'/tutors'} >
                            <Button color="primary" className={'bg-cyan-500 px-8 py-4 text-white shadow-lg'} >All Tutors</Button>
                        </Link>
                    </div>

                </div></SwiperSlide>

            </Swiper>

        </div>
    );
};

export default Banner;