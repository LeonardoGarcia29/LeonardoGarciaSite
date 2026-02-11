import SemesterGrades from "./components/SemesterGrades";
export default function Transcript() {

    const semesterGrades = [
      {
        degree: "CS",
        course: "49J",
        title: "Programming in Java",
        UA: 3,
        UG: 3,
        UE: 3,
        GR: "A",
        GP: 12.00
      }
    ]
  return (
    <div className="text-black  text-xl">
      <table>
        <caption className="py-4">San Jose State University</caption>
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
        - - - - - - - - - -&lt;</p>

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
        <caption>FALL SEMESTER  2024</caption>
        <caption>UGD - Undergraduate Degree</caption>
        <caption>MAJOR: BS Computer Science</caption>
        <SemesterGrades semesterGrades={semesterGrades}/>
      </table>
    </div>
  );
}