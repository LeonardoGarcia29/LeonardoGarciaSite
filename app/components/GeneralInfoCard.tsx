"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function GeneralInfoCard() {
  const router = useRouter();
  return (
    <div className="relative flex w-[65%] rounded-3xl mt-10">
      {/* <div className="absolute inset-0 bg-[url('/sjsu2.jpg')] bg-cover bg-center opacity-70"></div> */}
      <div className="flex-[3] p-10 bg-white text-black rounded-l-3xl">
        <h1 className="text-4xl font-bold mb-4">Leonardo Garcia</h1>
        <h2 className="text-2xl mb-2">Computer Science Student</h2>
        <p className="text-lg mb-4">San Jose State University</p>
        <p className="text-lg"> Computer Science student at SJSU with experience building backend and full-stack applications.
          Worked with TypeScript, Java, and cloud tools to build reliable, maintainable systems.</p>
        <div className="flex justify-left w-4/7 mt-10">
          {/* add the onblickj for the buttons  
              Change the color for the resume button
          */}
          <button type="button" className=" m-3 px-10 py-3 bg-white text-black border border-black border-2 rounded-2xl font-medium 
          hover:scale-102 hover:bg-black hover:text-white transition-transform duration-250"
            onClick={() => router.push("https://github.com/LeonardoGarcia29")}>Github</button>
          <button type="button" className=" m-3 px-10 py-3 bg-white text-black border border-blue-700 border-2 rounded-2xl font-medium 
          hover:scale-102 hover:bg-blue-700 hover:text-white transition-transform duration-250" onClick={() => router.push("https://www.linkedin.com/in/leonardogarcia03/")}>LinkedIn</button>
          {/* <button type="button" className="px-10 py-3 bg-white text-black border border-blue-700 border-2 rounded-2xl font-medium 
          hover:scale-102 hover:bg-blue-700 hover:text-white transition-transform duration-250">Resume</button> */}
        </div>
      </div>
      <div className="flex flex-[1] bg-white rounded-r-3xl">
        <Image src="/leonardogarcia.jpg" alt="Student Picture" height={500} width={400}
          className="w-auto h-full rounded-r-3xl object-cover ml-auto"
        />
      </div>
    </div >
  );
}