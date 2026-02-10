import Image from "next/image";

export default function Home() {
  return (
    <div className="flex">
      <div className="bg-blue-500 flex-[3]">
        information about me
      </div>
      <div className="bg-red-500 flex-[2]">
        picture of me
      </div>
    </div>
  );
}
