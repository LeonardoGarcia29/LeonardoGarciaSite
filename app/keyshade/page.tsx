import Link from "next/link";
import Image from "next/image";

export default function Keyshade() {
  return (
    <div className=" flex p-8 bg-white m-20 text-black rounded-2xl shadow-lg">
      <div className="flex flex-[1] justify-center items-center">
        <Image src="/keyshade.png" alt="Keyshade Logo" width={400} height={400} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex-[1]">
        <h1 className="text-3xl font-bold mb-4">Keyshade(CTI-CodeDay Micro-internship)</h1>
        <h2>TypeScript, NestJS, Redis, Azure, Jest, Git</h2>
        <ul className="[&>li]:m-5">
          <li>• Worked with a team to enhance a CLI tool for secure secret management.</li>
          <li>• Developed a metrics tracking service in the API using NestJS and Redis to record daily usage analytics.</li>
          <li>• Automated uploads to Azure Blob Storage using scheduled cron jobs for monitoring.</li>
          <li>• Wrote and maintained unit tests with Jest to validate service logic and ensure reliability.</li>
          <li>• Self-taught the basics of NestJS to contribute effectively to the project’s API development.</li>
        </ul>
        <div className="flex">
          <p className="text-blue-600 underline m-2"><Link href="https://github.com/keyshade-xyz/keyshade/pull/1216#diff-23dacdf6fbb864b1b7c5c2a009c424ce10e9655b01f877fb307c2e9ba3127de7">Pull Request</Link></p>
          <p className="text-blue-600 underline m-2"><Link href="https://docs.google.com/document/d/15G3x2OiQOQL_NqbvVBV5NxhaXZyX5daUCF_b90e5iLU/edit?usp=sharing">Blog Post</Link></p>
        </div>

      </div>
    </div>
  );
}
