import { Button, Card } from "@heroui/react";
import { BookOpen, CalendarDays, Clock3, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AvailableTutorCard({ tutor }) {
  console.log(tutor)

const formattedDate = new Date(tutor.session_start_date).toLocaleDateString(
  "en-US",
  {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
);
  
  return (
    <Card className="max-w-100 hover:scale-103 transition-all duration-300 ease-in-out">
      <div className="relative w-full h-62.5 overflow-hidden rounded-xl my-3">
        <Image
          src={tutor?.image || "https://images.unsplash.com/photo-1516321497487-e288fb19713f"} 
          alt= {tutor?.name}
          fill
          className="object-cover"
        />
      </div>

      <Card.Header className="space-y-1">


        <Card.Title className="font-bold text-2xl text-slate-800">
          {tutor?.name}
        </Card.Title>

        <div className="flex items-center gap-2 text-gray-600 mb-5">
          <BookOpen size={18} />
          <p>{tutor?.category}</p>
        </div>



        <div className="flex items-center gap-2 text-gray-600">
          <Clock3 size={18} />
          <p>{tutor?.time_slot}</p>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDays size={18} />
          <p>{formattedDate}</p>
        </div>

        <div className="text-blue-600 font-bold text-xl">
          {tutor?.hourly_rate}<span className="text-sm text-gray-500">/hr</span>
        </div>

      </Card.Header>

      <Link href={`/tutors/${tutor?._id}`} >
        <Button className={'bg-cyan-500 w-full'} >Book Session</Button>
      </Link>

    </Card>
  );
}