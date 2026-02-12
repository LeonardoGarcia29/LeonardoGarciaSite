"use client"
import Link from "next/link";
import { use, useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "./dropdown";
export default function NavBar() {
  const [hide, sethide] = useState(true);
  const [password, setPassword] = useState("");
  const [onTranscript, setOnTranscript] = useState(false);
  const router = useRouter();

  function handlePasswordSubmit() {
    if (password === "123") {
      sethide(true);
      setPassword("");
      setOnTranscript(true);
      router.push("/transcript");
    }
    else {
      alert("Incorrect password");
      setPassword("");
    }
  }
  return <>


    <nav className="flex bg-[#FFFBE9] text-black h-16 justify-evenly items-center" >
      {!hide && !onTranscript && (<div className="flex fixed inset-0 items-center justify-center z-50 text-black bg-black/50">
        <div className="bg-gray-100 p-5 rounded-lg">
          <h2 className="mb-2">Enter Password</h2>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-black border-2 rounded-lg" />
          <div className="flex justify-between pt-4">
            <button className="border border-black border-2 rounded-lg px-2" onClick={handlePasswordSubmit}>Enter</button>
            <button className="border border-black border-2 rounded-lg px-2" onClick={() => { setPassword(""); sethide(true); }}>Cancel</button>
          </div>
        </div>
      </div>)
      }
      <div className=" flex flex-[4] justify-center">
        <h1 className="text-2xl font-bold">Leonardo Garcia</h1>
      </div>
      <div className="flex flex-[5] justify-evenly items-center">
        <div>
          <button onClick={() => { router.push("/"); setOnTranscript(false); }}>Home</button>
        </div>
        <div>
          <button disabled={onTranscript} onClick={() => sethide(false)}>Transcript</button>
        </div>
        <div>
          <Dropdown />
        </div>
      </div>

    </nav >
  </>
}