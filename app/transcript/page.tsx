import SemesterGrades from "./components/SemesterGrades";
export default function Transcript() {

  const finalScoresFall24 = [
    {
      scoreName: "SEMESTER TOTAL:",
      UA: 12.0,
      UG: 12.0,
      UE: 12.0,
      GP: 48.0,
      GPA: 4.000,
    },
    {
      scoreName: "SJSU CUM:",
      UA: 12.0,
      UG: 12.0,
      UE: 12.0,
      GP: 48.0,
      GPA: 4.000,
    },
    {
      scoreName: "EXTERNAL CREDIT: ",
      UA: "",
      UG: 65.6,
      UE: 74.6,
      GP: 260.2,
      GPA: 3.966,
    },
    {
      scoreName: "ALL COLLEGE:",
      UA: 86.6,
      UG: 77.6,
      UE: 86.6,
      GP: 308.2,
      GPA: 3.971,
    },
  ]
  const semesterGradesFall24 = [
    {
      degree: "CS",
      course: "49J",
      title: "Programming in Java",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A",
      GP: 12.00
    },
    {
      degree: "CS",
      course: "147",
      title: "Comp Architecture",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A+",
      GP: 12.00
    },
    {
      degree: "CS",
      course: "154",
      title: "Formal Lang & Comput",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A+",
      GP: 12.00
    },
    {
      degree: "NUFS",
      course: "163",
      title: "Sci Phys Fit + Nutri",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A+",
      GP: 12.00
    },


  ]

  const semesterGradesSpring25 = [
    {
      degree: "CCS",
      course: "1",
      title: "Introduction CCS",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A",
      GP: 12.00
    },
    {
      degree: "CS",
      course: "146",
      title: "Data Struct & Alg  ",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A-",
      GP: 11.1
    },
    {
      degree: "CS",
      course: "151",
      title: "Object-Oriented Dsgn ",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A",
      GP: 12.00
    },
    {
      degree: "KIN",
      course: "101",
      title: "Sport in America ",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A",
      GP: 12.00
    },
    {
      degree: "KMUSC",
      course: "28",
      title: "Guitar Fundamentals",
      UA: 1,
      UG: 1,
      UE: 1,
      GR: "B-",
      GP: 2.7
    },

  ]
  const finalScoresSpring25 = [
    {
      scoreName: "SEMESTER TOTAL:",
      UA: 13.0,
      UG: 13.0,
      UE: 13.0,
      GP: 49.8,
      GPA: 3.830,
    },
    {
      scoreName: "SJSU CUM:",
      UA: 25.0,
      UG: 25.0,
      UE: 25.0,
      GP: 97.8,
      GPA: 3.912,
    },
    {
      scoreName: "ALL COLLEGE:",
      UA: 99.6,
      UG: 90.6,
      UE: 99.6,
      GP: 358.0,
      GPA: 3.951,
    },
  ]

  const semesterGradesFall25 = [
    {
      degree: "CS",
      course: "100w",
      title: "Writing Workshop",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A",
      GP: 12.00
    },
    {
      degree: "CS",
      course: "149",
      title: "Operating Systems ",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A-",
      GP: 11.1
    },
    {
      degree: "CS",
      course: "166",
      title: "Information Security",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A",
      GP: 12.00
    },
    {
      degree: "PHIL",
      course: "134",
      title: "Computers, Ethics, S ",
      UA: 3,
      UG: 3,
      UE: 3,
      GR: "A+",
      GP: 12.00
    },
  ]

  const finalScoresFall25 = [
    {
      scoreName: "SEMESTER TOTAL:",
      UA: 12.0,
      UG: 12.0,
      UE: 12.0,
      GP: 47.0,
      GPA: 3.925,
    },
    {
      scoreName: "SJSU CUM:",
      UA: 37.0,
      UG: 37.0,
      UE: 37.0,
      GP: 144.9,
      GPA: 3.916,
    },
    {
      scoreName: "ALL COLLEGE:",
      UA: 111.6,
      UG: 102.6,
      UE: 111.6,
      GP: 405.1,
      GPA: 3.948,
    },
  ]

  return (
    <div className="text-black  text-sm">
      <table>
        <caption className="py-4 font-bold text-xl">San Jose State University</caption>
        <tbody>
          <tr>
            <td className="p-2">STUDENT NAME: </td>
            <td>Garcia, Leonardo</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-2">STUDENT NUMBER: </td>
            <td>017811209</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td className="p-2">BIRTH MO/DAY: </td>
            <td>11/29</td>
          </tr>
        </tbody>

      </table>

      <p className="py-10">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - - - - -
        - - - - - - - - - -</p>

      <table className="[&_td]:p-5">
        <caption className="font-bold py-3">UNIVERSITY MEMORANDUM</caption>
        <caption className="font-bold py-3">UNDERGRADUATE RECORD</caption>
        <thead><tr>
          <th className="p-3">EXTERNAL CREDIT</th>
          <th>UE</th>
          <th>TERM</th>
          <th>SCORE</th>
        </tr></thead>

        <tbody><tr>
          <td>De Anza College</td>
          <td>65.6</td>
          <td>FALL 2024</td>
          <td></td>
        </tr></tbody>

        <tbody><tr>
          <td>AP Calculus AB</td>
          <td>3.0</td>
          <td>FALL 2024</td>
          <td>4</td>
        </tr></tbody>

        <tbody>
          <tr>
            <td>AP Spanish Language & Culture</td>
            <td>6.0</td>
            <td>FALL 2024</td>
            <td>5</td>
          </tr>
        </tbody>

      </table>

      <table className="[&_td]:p-3">
        <thead>
          <tr>
            <th className="py-6">EXTERNAL DEGREE</th>
          </tr></thead>
        <tbody><tr>
          <td>De Anza College</td>
        </tr></tbody>
        <tbody>
          <tr>
            <td>CERTADV  JUNE 2024</td>
          </tr></tbody>
        <tbody><tr>
          <td>De Anza College</td>
        </tr></tbody>
        <tbody>
          <tr>
            <td>AS-T  JUNE 2024</td>
          </tr></tbody>

      </table>

      <table className="[&_td]:p-3 [&_th]:p-3">
        <thead>
          <tr>
            <th>EXTERNAL CREDIT TOTALS</th>
            <th>UG</th>
            <th>UE</th>
            <th>GP</th>
            <th>GPA</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td></td>
            <td>65.59</td>
            <td>74.6</td>
            <td>260.16</td>
            <td>3.966</td>
          </tr>
        </tbody>

      </table>

      <table className="[&_td]:p-3 [&_th]:p-3">
        <caption className="pb-4 pt-15 font-bold">FALL SEMESTER  2024</caption>
        <caption className="py-4">UGD - Undergraduate Degree</caption>
        <caption className="py-4">M0AJOR: BS Computer Science</caption>
        <SemesterGrades semesterGrades={semesterGradesFall24} finalScores={finalScoresFall24} />
      </table>

      <p className="py-4">President's Scholar</p>

      <table className="[&_td]:p-3 [&_th]:p-3">
        <caption className="font-bold py-5">SPRING SEMESTER  2025</caption>
        <SemesterGrades semesterGrades={semesterGradesSpring25} finalScores={finalScoresSpring25} />
      </table>

      <p className="py-4">Dean's Scholar</p>

      <table className="[&_td]:p-3 [&_th]:p-3">
        <caption className="font-bold py-5">FALL SEMESTER  2025</caption>
        <SemesterGrades semesterGrades={semesterGradesFall25} finalScores={finalScoresFall25} />
      </table>

      <b className="py-6">SPRING SEMESTER  2026</b>
    </div>
  );
}