const Score = ({score}) => {
  return ( 
    <>
      <div>
          <div>
            <li> score: {score.score},
             date: {score.date}</li>
          </div>
      </div>
    </>  
  );
}
 
export default Score;