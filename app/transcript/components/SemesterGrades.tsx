export default function SemesterGrades({ semesterGrades }: any) {
    return <>
    <thead>
        <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>UA</th>
            <th>UG</th>
            <th>UE</th>
            <th>GR</th>
            <th>GP</th>
            <th>GPA</th>
        </tr>
    </thead>
        
    <tbody>
         {semesterGrades.map((course: any) => (
        <tr key={course.course}>
            <td>{course.degree}</td>
            <td>{course.course}</td>
            <td>{course.title}</td>
            <td>{course.UA}</td>
            <td>{course.UG}</td>
            <td>{course.UE}</td>
            <td>{course.GR}</td>
            <td>{course.GP}</td>
        </tr>
       ))}
    </tbody>
    </>
}