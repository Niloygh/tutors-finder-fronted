import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { BookOpen } from "lucide-react";
import Social from "./Social";

const Footer = () => {
    return (
        <footer className="relative mt-24">
            <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

            {/* Background Layer */}
            <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

            {/* Subtle Gradient Glow */}
            <div
                className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                {/* Top Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Link href="/" className="flex items-center gap-2 group">
                                <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform">
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <span className="font-extrabold text-2xl bg-linear-to-r from-blue-600 to-[#2C5EAD] bg-clip-text text-transparent">
                                    Tutor Finder
                                </span>
                            </Link>
                        </div>

                        <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 max-w-xs">
                            Tutor Finder connects students with skilled and experienced tutors for personalized learning.
                            Our platform makes it easy to discover, book, and learn from tutors anytime, anywhere with confidence.
                        </p>
                    </div>


                    {/* Tutor services */}
                    <div>
                        <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
                            Tutor services
                        </h3>
                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Find Tutors
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Become a Tutor
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Online Classes
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-black dark:hover:text-white transition"
                                >
                                    Book Sessions
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* social links */}
                    <div >
                        <h1 className="text-sm font-semibold text-black dark:text-white mb-4">Social Links</h1>
                        <Social />                        
                    </div>

                    {/* CTA Block */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-black dark:text-white">
                            Contact information
                        </h3>
                        <div className="text-gray-600 dark:text-gray-400 space-y-2">
                            <p>Email: support@tutorsfinder.com</p>
                            <p>Phone: +8801XXXXXXXXX</p>
                            <p>Location: Dhaka, Bangladesh</p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

                {/* Bottom */}
                <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                    <p>© {new Date().getFullYear()} Tutor Finder. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        <Link
                            href="/"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/"
                            className="hover:text-black dark:hover:text-white transition"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;