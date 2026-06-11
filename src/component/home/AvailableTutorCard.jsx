'use client'

import { Button, Card } from "@heroui/react";
import { BookOpen, CalendarDays, Clock3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function AvailableTutorCard({ tutor }) {

  const [active, setActive] = useState(true)


  const formattedDate = new Date(
    tutor?.session_start_date
  ).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentDate = new Date();
  const TutorDate = new Date(tutor?.session_start_date);

  useEffect(() => {
    if (currentDate < TutorDate) {
      setActive(false);
    } else {
      setActive(true);
    }
  }, [currentDate, TutorDate]);



  return (
    <Card className="max-w-100 p-4 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300">
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden rounded-xl">
        <Image
          src={
            tutor?.image ||
            "https://images.unsplash.com/photo-1516321497487-e288fb19713f"
          }
          alt={tutor?.name || "Tutor"}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <Card.Header className="flex flex-col items-start gap-3 pt-4">
        {/* Name */}
        <Card.Title className="text-2xl font-bold text-gray-900 dark:text-white">
          {tutor?.name}
        </Card.Title>

        {/* Subject */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <BookOpen size={18} />
          <span>{tutor?.category}</span>
        </div>

        {/* Time */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <Clock3 size={18} />
          <span>{tutor?.time_slot}</span>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
          <CalendarDays size={18} />
          <span>{formattedDate}</span>
        </div>

        {/* Rate */}
        <div className="text-2xl font-bold text-blue-600 dark:text-cyan-400">
          {tutor?.hourly_rate}
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            /hr
          </span>
        </div>
      </Card.Header>

      {/* Button */}
      <Link href={`/tutors/${tutor?._id}`} className="w-full mt-4">
        <Button 
        isDisabled={active}
        className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold">
          Book Session
        </Button>
      </Link>
    </Card>
  );
}