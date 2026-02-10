import Image from "next/image";

export default function Home() {
  return (
    <div className=" relative flex  text-white bg-black">
      <div className="absolute inset-0 bg-[url('/sjsu2.jpg')] bg-cover bg-center opacity-70"></div>
      <div className="flex-[3] items-center p-12 z-10">
        3+ years of programming experience, building projects across Java, C++, Python, TypeScript, and full-stack technologies.
        <br />
        Micro-Internship Achievement: Successfully contributed to Keyshade through the CodeDay CTI program, implementing API metrics tracking, Azure automation, and Jest testing—self-taught NestJS to contribute effectively.
        <br />
        Academic Excellence: Maintained a 3.91 GPA at San José State University and 3.97 GPA at De Anza College, demonstrating consistent high performance across rigorous CS coursework.

      </div>
      <div className="flex-[2]">
        <div className="p-12">
          <div className="flex justify-center relative">
            <Image src="/leonardogarcia.jpg" alt="Student Picture" height={500} width={400}
              className="w-3/4 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );

}
