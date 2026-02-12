import { use, useState } from "react";
import { useRouter } from "next/navigation";

export default function Dropdown() {

  const [dropdown, setdropdown] = useState(false);
  return <>
    <div className="relative">
      <button onClick={() => setdropdown(true)}>Projects</button>

      {dropdown && (<div className="absolute">
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
        </ul>
      </div>)}
    </div>
  </>
}