'use client';

import { Button } from '@heroui/react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <section className="px-4 sm:px-6 lg:px-8 py-4">
            <Swiper
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="relative h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden bg-[url('/image/banner1.jpg')] bg-cover bg-center text-white flex items-center justify-center">

                        <div className="absolute inset-0 bg-black/55"></div>

                        <div className="relative z-10 text-center px-6 max-w-4xl">

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Find the Perfect Tutor for Your Success
                            </h1>

                            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
                                Personalized learning made easy with expert tutors anytime, anywhere.
                            </p>

                            <Link href="/tutors">
                                <Button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 font-semibold">
                                    All Tutors
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="relative h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden bg-[url('/image/banner2.jpg')] bg-cover bg-center text-white flex items-center justify-center">

                        <div className="absolute inset-0 bg-black/55"></div>

                        <div className="relative z-10 text-center px-6 max-w-4xl">

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Smart Tutor Booking Made Simple
                            </h1>

                            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
                                Discover expert tutors, schedule sessions easily, and achieve your learning goals faster.
                            </p>

                            <Link href="/tutors">
                                <Button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 font-semibold">
                                    All Tutors
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="relative h-[450px] md:h-[550px] lg:h-[600px] rounded-3xl overflow-hidden bg-[url('/image/banner1.jpg')] bg-cover bg-center text-white flex items-center justify-center">

                        <div className="absolute inset-0 bg-black/55"></div>

                        <div className="relative z-10 text-center px-6 max-w-4xl">

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                Learn Better. Score Higher. Grow Faster.
                            </h1>

                            <p className="mt-4 text-base sm:text-lg md:text-xl text-gray-200">
                                Personalized tutoring sessions designed to help students succeed in every subject.
                            </p>

                            <Link href="/tutors">
                                <Button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-6 font-semibold">
                                    All Tutors
                                </Button>
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Banner;