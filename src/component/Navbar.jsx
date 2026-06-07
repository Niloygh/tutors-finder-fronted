"use client";

import { useState, useEffect } from "react";
import {
  BookOpen,
  Menu,
  X,
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
  const userData = authClient.useSession();
  const user = userData.data?.user;

  const { data: sessions, isPending } = useSession();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b
      ${
        scrolled
          ? "bg-white/70 dark:bg-[#0B1120]/70 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-[#0B1120]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-blue-600 rounded-xl group-hover:rotate-12 transition">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Tutor Finder
            </span>
          </Link>

          {/* MENU */}
          <div className="hidden md:flex gap-6 items-center">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/tutors">Tutors</NavLink>
            <NavLink href="/add-tutor">Add Tutor</NavLink>
            <NavLink href="/my-tutors">My Tutors</NavLink>
            <NavLink href="/my-booked-sessions">My Booked Session</NavLink>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            <ThemeSwitch />

            {/* AUTH */}
            {!isPending && !sessions ? (
              <div className="flex items-center gap-3">
                <Link href="/login" className="text-sm font-medium">
                  Login
                </Link>

                <Link href="/register">
                  <Button className="bg-cyan-500 text-white rounded-full px-6">
                    Register
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="relative group">
                <button className="flex items-center gap-2">
                  <Image
                    width={40}
                    height={40}
                    src={user?.image || "/default-avatar.png"}
                    alt="avatar"
                    className="rounded-full"
                  />
                  <span className="hidden lg:block text-sm font-medium">
                    {user?.name}
                  </span>
                </button>

                {/* DROPDOWN */}
                <div className="absolute right-0 top-12 hidden group-hover:flex flex-col w-56 bg-white dark:bg-[#0B1120] border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl overflow-hidden">
                  <Link
                    href="/profile"
                    className="px-4 py-3 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center gap-2"
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    Profile
                  </Link>

                  <button
                    onClick={handleLogOut}
                    className="px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0B1120] border-t p-4 space-y-3">
          <MobileLink href="/">Home</MobileLink>
          <MobileLink href="/tutors">Tutors</MobileLink>
          <MobileLink href="/add-tutor">Add Tutor</MobileLink>
          <MobileLink href="/my-tutors">My Tutors</MobileLink>
          <MobileLink href="/my-booked-sessions">My Booked Session</MobileLink>
        </div>
      )}
    </nav>
  );
}

/* Helpers */
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="text-slate-700 dark:text-slate-200 hover:text-cyan-500 transition font-medium"
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children }) {
  return (
    <Link
      href={href}
      className="block px-3 py-2 rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
    >
      {children}
    </Link>
  );
}