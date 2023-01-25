const Student = ({student}) => {
  return ( 
    <>
    <div>
      <h1>{student.name}</h1>
      <h2>{student.bio}</h2>
    </div>
    </>
  );
}
 
export default Student;