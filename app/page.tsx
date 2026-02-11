import Image from "next/image";
import GeneralInfoCard from "./components/GeneralInfoCard";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-evenly w-full h-screen bg-cover bg-center bg-no-repeat bg-blue-100"
      style={{ backgroundImage: "url('/sjsu4.jpg')" }}>
      <div className="absolute inset-0 bg-black/10"></div>
      <GeneralInfoCard />
      <div className="flex justify-between w-[65%] h-[35%] z-10">
        <div className="flex-[3]">
          <p className="mb-2 font-bold text-2xl">Introduction Video</p>
          <video src="/IMG_2128.mov" controls className=" w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="flex-[1]"></div>
        <div className="flex-[2] rouned-3xl">
          <p className="mb-2 font-bold text-2xl">Home Address</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3175.6238101024733!2d-121.81680358816418!3d37.25663207200421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808e31fcdabb842d%3A0xf8ef2da0cf7a6b13!2s93%20Hayes%20Ave%2C%20San%20Jose%2C%20CA%2095123!5e0!3m2!1sen!2sus!4v1770814066041!5m2!1sen!2sus"
            width="550" height="300" style={{ border: 0 }} allowFullScreen={true}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade" className=" w-full h-full rounded-3xl">
          </iframe>
        </div>
      </div>
    </div>
  );

}
