import About from "@/component/home/About";
import AvailableTutors from "@/component/home/AvailableTutors";
import Banner from "@/component/home/Banner";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Image from "next/image";


export const metadata = {
  title: "Add Tutor | Home Page",
  description: "This is home Page",
};


export default function Home() {
  return (
    <div>
      <Banner />
      <AvailableTutors />
      <About />
      <WhyChooseUs />
      
    </div>
  );
}
