"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { authClient, signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { ThemeSwitch } from "./home/ThemeSwitch";

export function Navbar() {
  const { data: session, isPending } = useSession();
  const user = authClient.useSession().data?.user;

  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-[#0B1120]/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 dark:bg-[#0B1120] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition-transform">
              <BookOpen className="w-6 h-6 text-white" />
            </div>

            <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
              Tutor Finder
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/tutors">Tutors</NavLink>
            <NavLink href="/add-tutor">Add Tutor</NavLink>
            <NavLink href="/my-tutors">My Tutors</NavLink>
            <NavLink href="/my-booked-sessions">
              Booked Sessions
            </NavLink>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeSwitch />

            {!isPending && !session ? (
              <>
                <Link
                  href="/login"
                  className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
                >
                  Login
                </Link>

                <Link href="/register">
                  <Button
                    color="primary"
                    className="font-bold rounded-full px-8 shadow-lg shadow-blue-600/20"
                  >
                    Join Free
                  </Button>
                </Link>
              </>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700">
                  <Image
                    width={40}
                    height={40}
                    src={
                      user?.image ||
                      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
                    }
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                  />

                  <div className="text-left hidden lg:block">
                    <p className="text-sm font-bold truncate max-w-28 dark:text-white">
                      {user?.name}
                    </p>
                  </div>
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-12 w-56 !bg-white dark:!bg-[#0B1120] border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl hidden group-hover:flex flex-col py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-700">
                    <p className="font-bold text-sm dark:text-white">
                      Welcome back!
                    </p>

                    <p className="text-xs truncate text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <Link
                    href="/profile"
                    className="px-4 py-2 text-sm hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-3 transition-colors"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Profile
                  </Link>
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-3 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Log Out
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeSwitch />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white dark:bg-[#0B1120] border-b border-slate-200 dark:border-slate-700 animate-in slide-in-from-top duration-300">
          <MobileLink href="/">Home</MobileLink>
          <MobileLink href="/tutors">Tutors</MobileLink>
          <MobileLink href="/add-tutor">Add Tutor</MobileLink>
          <MobileLink href="/my-tutors">My Tutors</MobileLink>
          <MobileLink href="/my-booked-sessions">
            My Booked Sessions
          </MobileLink>

          <div className="pt-4 border-t border-slate-200 dark:border-slate-700 mt-4">
            {!session ? (
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login">
                  <Button
                    variant="bordered"
                    className="rounded-xl w-full"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button
                    color="primary"
                    className="rounded-xl w-full"
                  >
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <button
                onClick={handleLogOut}
                className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl"
              >
                Log Out
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="font-medium text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-base font-medium text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl"
    >
      {children}
    </Link>
  );
}