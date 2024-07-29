import BackdropDesign from './BackdropDesign';
import { Link } from 'react-router-dom';

export default function AnswerPage(props) {
  console.log(props.playerAnswer);
  const Queries = ({ question, choices }) => {
    return (
      <>
        <form className="choices" id="forms">
          {question.map((question, index) => (
            <div key={index}>
              <h4>{question}</h4>
              {choices[index].map((choice, innerIndex) => (
                <div key={innerIndex}>
                  <input type="radio" name={index} value={choice} id={index} />
                  <label htmlFor={innerIndex}>{choice}</label>
                </div>
              ))}
            </div>
          ))}
        </form>
      </>
    );
  };

  return (
    <main>
      <BackdropDesign />
      <Link to={`/`}>
        <input type="button" value="Play Again" />
      </Link>
    </main>
  );
}
