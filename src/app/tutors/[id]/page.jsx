import Btn from "@/component/Btn";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import {
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineMapPin,
} from "react-icons/hi2";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`
  );

  const data = await res.json();

  return {
    title: `Tutor Finder | ${data?.name || "Tutor Details"}`,
  };
}

const singleTutor = async (id, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`,
    {
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
      cache: "no-store",
    }
  );

  return res.json();
};

const TutorsDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const tutor = await singleTutor(id, token);

  const formattedDate = tutor?.session_start_date
    ? new Date(tutor.session_start_date).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not Available";

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl transition-all duration-300">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-5 md:p-8">

          {/* Image Section */}
          <div className="relative h-[350px] md:h-[500px] overflow-hidden rounded-2xl">
            <Image
              src={
                tutor?.image ||
                "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
              }
              alt={tutor?.name || "Tutor"}
              fill
              priority
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-between">

            <div>

              {/* Category & Mode */}
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  {tutor?.category}
                </span>

                <span className="rounded-full bg-green-100 dark:bg-green-900 px-4 py-1 text-sm font-medium text-green-700 dark:text-green-300">
                  {tutor?.mode}
                </span>
              </div>

              {/* Name */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {tutor?.name}
              </h1>

              {/* Institution */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-6">
                <HiOutlineAcademicCap size={22} />
                <span>{tutor?.institution}</span>
              </div>

              {/* Info */}
              <div className="space-y-4">

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <HiOutlineMapPin
                    size={22}
                    className="text-primary"
                  />
                  <span>{tutor?.location}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                  <HiOutlineClock
                    size={22}
                    className="text-primary"
                  />
                  <span>{tutor?.experience} Experience</span>
                </div>

              </div>

              {/* Session Info */}
              <div className="mt-6 rounded-2xl bg-gray-100 dark:bg-gray-800 p-5">

                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Session Information
                </h3>

                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">
                    Available Time:
                  </span>{" "}
                  {tutor?.time_slot}
                </p>

                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  <span className="font-medium">
                    Start Date:
                  </span>{" "}
                  {formattedDate}
                </p>

                <p className="mt-3 text-green-600 dark:text-green-400 font-semibold">
                  Remaining Slots: {tutor?.remaining_slot || 10}
                </p>

              </div>

              {/* Description */}
              {tutor?.description && (
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    About Tutor
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {tutor.description}
                  </p>
                </div>
              )}
            </div>

            {/* Bottom */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 border-t border-gray-200 dark:border-gray-700 pt-6">

              <div>
                <h2 className="text-4xl font-bold text-primary">
                  ৳{tutor?.hourly_rate}
                  <span className="ml-1 text-lg font-medium text-gray-500 dark:text-gray-400">
                    /hr
                  </span>
                </h2>
              </div>

              <Btn tutor={tutor} />

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorsDetailsPage;