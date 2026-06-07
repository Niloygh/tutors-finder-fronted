// components/AboutLearningSection.jsx

import Image from "next/image";
import { GraduationCap, Target, BadgeCheck } from "lucide-react";
import { Button } from "@heroui/react";
import Link from "next/link";

export default function AboutLearningSection() {
  return (
    <section className="bg-white dark:bg-gray-900 text-black dark:text-white py-12 md:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT IMAGE SECTION */}
        <div className="relative">
          {/* Background Blur */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 bg-cyan-200 dark:bg-cyan-500/20 rounded-full blur-3xl opacity-70"></div>

          {/* Main Card */}
          <div className="relative bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-[24px] sm:rounded-[40px] p-3 sm:p-5 shadow-xl">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {/* Image 1 */}
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[30px] aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Students"
                  fill
                  className="object-cover dark:brightness-90"
                />
              </div>

              {/* Image 2 */}
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[30px] aspect-[3/4] mt-6 sm:mt-10">
                <Image
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136"
                  alt="Tutor"
                  fill
                  className="object-cover dark:brightness-90"
                />
              </div>

              {/* Image 3 */}
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[30px] aspect-[3/4] -mt-3 sm:-mt-6">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt="Student"
                  fill
                  className="object-cover dark:brightness-90"
                />
              </div>

              {/* Image 4 */}
              <div className="relative overflow-hidden rounded-[20px] sm:rounded-[30px] aspect-[3/4]">
                <Image
                  src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df"
                  alt="Learning"
                  fill
                  className="object-cover dark:brightness-90"
                />
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500 text-white w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center text-center font-bold text-sm sm:text-base md:text-lg shadow-2xl border-4 border-white dark:border-gray-800">
              <div>
                100%
                <br />
                Success
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-cyan-500 font-semibold uppercase tracking-widest text-sm mb-3">
            About Platform
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-5 md:mb-6">
            Learn Smarter
            <br />
            With Expert Tutors
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed mb-8 md:mb-10">
            Our tutor finder platform helps students connect with skilled
            educators for personalized learning experiences, online classes,
            and career growth opportunities.
          </p>

          {/* Features */}
          <div className="space-y-4 md:space-y-6">
            {/* Feature 1 */}
            <div className="flex gap-4 md:gap-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:shadow-lg transition duration-300">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 md:p-4 rounded-xl md:rounded-2xl h-fit">
                <GraduationCap className="text-cyan-500" size={24} />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                  Professional Tutors
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Learn from experienced and verified educators anytime.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex gap-4 md:gap-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:shadow-lg transition duration-300">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 md:p-4 rounded-xl md:rounded-2xl h-fit">
                <Target className="text-cyan-500" size={24} />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                  Goal Focused Learning
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Personalized sessions designed for academic success.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex gap-4 md:gap-5 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl p-4 md:p-5 hover:shadow-lg transition duration-300">
              <div className="bg-cyan-100 dark:bg-cyan-900/30 p-3 md:p-4 rounded-xl md:rounded-2xl h-fit">
                <BadgeCheck className="text-cyan-500" size={24} />
              </div>

              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1 md:mb-2">
                  Trusted Platform
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                  Thousands of students trust our learning ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Button */}
          <Link href="/">
            <Button className="mt-8 md:mt-10 w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg transition duration-300">
              Explore More
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}