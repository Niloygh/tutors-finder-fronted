
import Btn from "@/component/Btn";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import {
    HiOutlineAcademicCap,
    HiOutlineClock,
    HiOutlineMapPin,
} from "react-icons/hi2";


const singleTutor = async (id, token) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
        headers: {
            authorization: `bearer ${token}` || ""
        }
    })
    const data = await res.json()
    return data
}

const TutorsDetailsPage = async ({ params }) => {
    
    const { id } = await params
    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    
    const tutor = await singleTutor(id, token)

    return (
        <div className="max-w-5xl mx-auto rounded-3xl border shadow-sm p-4 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

                {/* Image */}
                {/* <div className="relative w-full h-65 md:h-80 overflow-hidden rounded-2xl">
          <Image
            src={tutor?.image || 'https://images.unsplash.com/photo-1621356986575-05811227a42e'}
            alt={tutor?.name}
            fill
            className="object-cover"
          />
        </div> */}

                <div
                    className="relative w-full overflow-hidden rounded-xl"
                    style={{ height: "400px" }}
                >
                    <Image
                        src={tutor?.image}
                        alt={tutor?.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between h-full">

                    <div>
                        {/* Top */}
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm text-default-500 font-medium">
                                {tutor?.category}
                            </span>

                            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                                {tutor?.mode}
                            </span>
                        </div>

                        {/* Name */}
                        <h2 className="text-3xl font-bold mb-2">
                            {tutor?.name}
                        </h2>

                        {/* Institution */}
                        <div className="flex items-center gap-2 text-default-600 mb-4">
                            <HiOutlineAcademicCap size={20} />
                            <span>{tutor?.institution}</span>
                        </div>

                        {/* Info */}
                        <div className="space-y-3 text-default-600">
                            <div className="flex items-center gap-2">
                                <HiOutlineMapPin size={20} />
                                <span>{tutor?.location}</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <HiOutlineClock size={20} />
                                <span>{tutor?.experience} Experience</span>
                            </div>
                        </div>

                        {/* Slot */}
                        <div className="mt-5 bg-default-100 rounded-xl p-4">
                            <p className="text-sm mb-1">
                                <span className="font-semibold">
                                    Available Time:
                                </span>{" "}
                                {tutor?.time_slot}
                            </p>

                            <p className="text-success font-semibold">
                                Remaining Slots: {tutor?.remaining_slot}
                            </p>
                        </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                        <div>
                            <h3 className="text-4xl font-bold text-primary">
                                ৳{tutor?.hourly_rate}
                                <span className="text-lg font-medium text-default-500">
                                    /hr
                                </span>
                            </h3>
                        </div>

                        <div className="sm:w-auto">
                            <Btn />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TutorsDetailsPage;