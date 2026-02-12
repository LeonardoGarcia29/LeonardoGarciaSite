import Link from "next/link";
import Image from "next/image";

export default function FacultySync() {
  return (
    <div className=" flex p-8 bg-white m-20 text-black rounded-2xl shadow-lg">
      <div className="flex flex-[1] justify-center items-center">
        <Image src="/facultySync.png" alt="Faculty Sync Logo" width={400} height={400} className="rounded-lg shadow-lg" />
      </div>
      <div className="flex-[1]">
        <h1 className="text-3xl font-bold mb-4">Faculty Sync Faculty Sync</h1>
        <h2>Java (JDBC), SQLite, JavaFx</h2>
        <ul className="[&>li]:m-5">
          <li>• Collaborated in a team to develop a Faculty Office Hours Manager using JavaFX, following the Software Development Life Cycle (SDLC). The application enables faculty to define custom time slots, courses, and schedules (semester, year, days) for organizing and managing student office hours.
          </li>
          <li>• Utilized SQLite with JDBC to design and build a persistent database storing faculty, course, and schedules.
          </li>
          <li>• Design UML class and sequence diagrams, and data model for the technical specification document.</li>
          <li>• Applied the Model-View-Controller (MVC) architectural pattern and integrated several class design patterns.</li>
          <li>• Employed polymorphism and SOLID principles throughout design for maintainable and extensible code.</li>
        </ul>
        <div className="flex">
          <p className="text-blue-600 underline m-2"><Link href="https://github.com/LeonardoGarcia29/Faculty-Sync">Github Repo</Link></p>
        </div>

      </div>
    </div>
  );
}
