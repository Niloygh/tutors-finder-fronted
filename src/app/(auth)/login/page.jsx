'use client';

import { Button, Input } from '@heroui/react';
import Link from 'next/link';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function Login() {
  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());

    const { error } = await authClient.signIn.email({
      ...loginData,
      callbackURL: '/',
    });

    if (error) {
      toast.error(error.message);
      return;
    }

    toast.success('Login Success');
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: 'google',
    });
  };

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 shadow-2xl space-y-8 relative overflow-hidden transition-colors duration-300">
            
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16 blur-3xl" />

            {/* Header */}
            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Welcome <span className="text-blue-600">Back</span>
              </h2>

              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Continue your learning journey today
              </p>
            </div>

            {/* Google Login */}
            <div className="space-y-4">
              <Button
                onClick={handleGoogleLogin}
                variant="bordered"
                className="w-full h-12 font-bold rounded-2xl border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors gap-3"
              >
                <Image
                  width={20}
                  height={20}
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sign in with Google
              </Button>
            </div>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-slate-100 dark:border-slate-800"></span>
              </div>

              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-slate-900 px-4 text-white dark:text-slate-400 font-bold tracking-widest">
                  Or with email
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                >
                  Email Address
                </label>

                <Input
                  id="email"
                  required
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  startContent={
                    <Mail className="w-5 h-5 text-slate-400" />
                  }
                  className="w-full"
                  classNames={{
                    inputWrapper:
                      'border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-500 h-14 rounded-2xl bg-white dark:bg-slate-800',
                  }}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                >
                  Password
                </label>

                <Input
                  id="password"
                  required
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  startContent={
                    <Lock className="w-5 h-5 text-slate-400" />
                  }
                  className="w-full"
                  classNames={{
                    inputWrapper:
                      'border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600/50 dark:hover:border-blue-500 h-14 rounded-2xl bg-white dark:bg-slate-800',
                  }}
                />
              </div>

              <div className="flex justify-end">
                <Link
                  href="#"
                  className="text-sm font-bold text-blue-600 hover:underline underline-offset-4"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                color="primary"
                type="submit"
                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-blue-600/20 group"
              >
                Sign In
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            {/* Footer */}
            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                New to CourseHub?{' '}
                <Link
                  href="/register"
                  className="text-blue-600 font-black hover:underline underline-offset-4"
                >
                  Create an account
                </Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}