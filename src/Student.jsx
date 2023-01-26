import Score from "./Score";

const Student = ({student}) => {
  return ( 
    <div>
      <h1>{student.name}</h1>
      <h2>{student.bio}</h2>
     <ul>
      {student.scores.map(score =>
      <Score score={score}/>
        )}
      </ul>
    </div>
  );
}
 
export default Student;