// components/AboutLearningSection.jsx

import Image from "next/image";
import { GraduationCap, Target, BadgeCheck } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function About() {
    return (
        <section className="bg-white text-black py-20 px-6 md:px-16">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE DESIGN */}
                <div className="relative">

                    {/* Background Blur */}
                    <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-200 blur-3xl rounded-full"></div>

                    {/* Main Card */}
                    <div className="relative bg-white border border-gray-200 rounded-[40px] p-5 shadow-xl">

                        <div className="grid grid-cols-2 gap-4">

                            <div className="rounded-[30px] overflow-hidden h-56 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                    alt="Students"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="rounded-[30px] overflow-hidden h-56 relative mt-10">
                                <Image
                                    src="https://images.unsplash.com/photo-1544717305-2782549b5136"
                                    alt="Tutor"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="rounded-[30px] overflow-hidden h-56 relative -mt-6">
                                <Image
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                                    alt="Student"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="rounded-[30px] overflow-hidden h-56 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
                                    alt="Learning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Floating Success Badge */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white w-28 h-28 rounded-full flex items-center justify-center text-center font-bold shadow-2xl border-4 border-white">
                            100% <br /> Success
                        </div>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div>
                    <p className="text-cyan-500 font-semibold mb-3 uppercase tracking-widest">
                        About Platform
                    </p>

                    <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
                        Learn Smarter <br />
                        With Expert Tutors
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed mb-10">
                        Our tutor finder platform helps students connect with skilled
                        educators for personalized learning experiences, online classes,
                        and career growth opportunities.
                    </p>

                    {/* FEATURES */}
                    <div className="space-y-6">

                        <div className="flex gap-5 bg-gray-50 border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition">
                            <div className="bg-cyan-100 p-4 rounded-2xl h-fit">
                                <GraduationCap className="text-cyan-500" size={28} />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    Professional Tutors
                                </h3>

                                <p className="text-gray-600">
                                    Learn from experienced and verified educators anytime.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5 bg-gray-50 border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition">
                            <div className="bg-cyan-100 p-4 rounded-2xl h-fit">
                                <Target className="text-cyan-500" size={28} />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    Goal Focused Learning
                                </h3>

                                <p className="text-gray-600">
                                    Personalized sessions designed for academic success.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-5 bg-gray-50 border border-gray-200 rounded-3xl p-5 hover:shadow-lg transition">
                            <div className="bg-cyan-100 p-4 rounded-2xl h-fit">
                                <BadgeCheck className="text-cyan-500" size={28} />
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    Trusted Platform
                                </h3>

                                <p className="text-gray-600">
                                    Thousands of students trust our learning ecosystem.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BUTTON */}
                    <Link href={'/'}>
                    <Button className="mt-10 bg-cyan-500 hover:bg-cyan-600 transition px-8 py-4 rounded-full font-semibold text-white shadow-lg">
                        Explore More
                    </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}