import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>

        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        <p className="mt-2 text-gray-500 max-w-md">
          Sorry, the page you are looking for does not exist in Tutor Finder.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 rounded-xl bg-blue-600 px-6 py-3 text-white font-medium hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
