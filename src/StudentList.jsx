import Student from "./Student";

const StudentList = ({studentList}) => {
  return ( 
    <>
      <div>
        <h1>Student List:</h1>
        {studentList.map (student =>
          <Student key={student.id} student={student} />
          )}
      </div>
    </>
  );
}
 
export default StudentList;