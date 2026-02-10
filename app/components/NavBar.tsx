import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="flex bg-[#FFFBE9] text-black h-16 justify-evenly items-center">
      <div className=" flex flex-[4] justify-center">
        <h1 className="text-2xl font-bold">Leonardo Garcia</h1>
      </div>
      <div className="flex flex-[5] justify-evenly items-center">
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/transcript">Transcript</Link>
        </div>
        <div>
          Projects
        </div>
      </div>

    </nav>
  );
}