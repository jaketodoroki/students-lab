import Score from "./Score";

const Student = ({student}) => {
  return ( 
    <>
    <div>
      <h1>{student.name}</h1>
      <h2>{student.bio}</h2>
      <Score score={student.score}/>
    </div>
    </>
  );
}
 
export default Student;