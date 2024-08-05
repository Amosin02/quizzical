import BackdropDesign from './BackdropDesign';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AnswerPage(props) {
  useEffect(() => {
    function checkAnswers() {
      for (let i = 0; i < props.playerAnswer.length; i++) {
        if (props.playerAnswer[i] === props.quizCorrectAnswer[i]) {
          console.log(`correct question ${i + 1}`);
        }
      }
    }

    checkAnswers();
  }, []);

  const Queries = ({ question, choices }) => {
    return (
      <>
        <form id="forms">
          {question.map((question, index) => (
            <div className="quiz" key={index}>
              <h4>{question}</h4>
              <div className="choices">
                {choices[index].map((choice, innerIndex) => (
                  <div key={innerIndex}>
                    {props.playerAnswer[index] === choice ? (
                      <input
                        className="checkmark"
                        type="radio"
                        name={index}
                        value={choice}
                        id={index}
                        checked="checked"
                        readOnly
                      />
                    ) : (
                      <input
                        className="checkmark"
                        type="radio"
                        name={index}
                        value={choice}
                        id={index}
                      />
                    )}
                    <label className="lbl" htmlFor={innerIndex}>
                      {choice}
                    </label>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}
        </form>
      </>
    );
  };

  return (
    <main>
      <Queries question={props.quizQuestion} choices={props.quizChoices} />
      <div className="btn-container">
        <Link to={`/`}>
          <input className="btn" type="button" value="Play Again" />
        </Link>
      </div>
    </main>
  );
}
