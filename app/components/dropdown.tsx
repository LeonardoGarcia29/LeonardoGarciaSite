import { useRouter } from "next/navigation";
import Link from "next/link";
import { use, useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button>Projects</button>
      <div
        className={`absolute left-0 top-full mt-1 w-48 bg-white border rounded-md shadow-lg
                    transition-all duration-150 z-50
                    ${open ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"}`}
      >
        <ul className="py-1">
          <li className="px-4 py-2 hover:bg-gray-100"><Link href="/keyshade">Keyshade</Link></li>
          <li className="px-4 py-2 hover:bg-gray-100"><Link href="/facultySync">Faculty Sync</Link></li>
        </ul>
      </div>
    </div>
  );
}