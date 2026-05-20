import About from "@/component/home/About";
import AvailableTutors from "@/component/home/AvailableTutors";
import Banner from "@/component/home/Banner";
import WhyChooseUs from "@/component/home/WhyChooseUs";
import Image from "next/image";

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
