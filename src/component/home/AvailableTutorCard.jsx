import { Button, Card } from "@heroui/react";
import { BookOpen, CalendarDays, Clock3, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function AvailableTutorCard() {
  return (
    <Card className="max-w-100 hover:scale-103 transition-all duration-300 ease-in-out">
        <div className="">
          <Image src={'https://images.unsplash.com/photo-1511629091441-ee46146481b6'} alt="cardImage" width={400} height={400} className="w-full rounded-xl my-3" />
        </div>

      <Card.Header className="space-y-1">


        <Card.Title className="font-bold text-2xl text-slate-800">
          Become an Acme Creator!
        </Card.Title>

        <div className="flex items-center gap-2 text-gray-600 mb-5">
          <BookOpen size={18} />
          <p>Mathematics</p>
        </div>



        <div className="flex items-center gap-2 text-gray-600">
          <Clock3 size={18} />
          <p>Sun - Thu | 5:00 PM - 8:00 PM</p>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <CalendarDays size={18} />
          <p>Starts Monday, June 1, 2026</p>
        </div>

        <div className="text-blue-600 font-bold text-xl">
          ৳500<span className="text-sm text-gray-500">/hr</span>
        </div>

      </Card.Header>

      <Link href="/" >
        <Button className={'bg-cyan-500 w-full'} >Book Session</Button>
      </Link>

    </Card>
  );
}