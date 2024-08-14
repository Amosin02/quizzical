import BackdropDesign from './BackdropDesign';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function AnswerPage(props) {
  const [totalText, setTotalText] = useState('');
  useEffect(() => {
    let total = 0;
    function checkAnswers() {
      for (let i = 0; i < props.playerAnswer.length; i++) {
        if (props.playerAnswer[i] === props.quizCorrectAnswer[i]) {
          total += 1;
          console.log(`correct question ${i + 1}`);
        } else {
        }
      }
      setTotalText(`You scored ${total}/5 correct answers`);
    }

    checkAnswers();
  }, []);

  function testClick(ind) {
    console.log(ind);
  }

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
                    {console.log(props.quizCorrectAnswer)}
                    {choice === props.quizCorrectAnswer[index] ? (
                      <input
                        className="checkmark-ans correct"
                        type="radio"
                        name={`${innerIndex} ${index}`}
                        value={choice}
                        id={`${innerIndex} ${index}`}
                        checked
                        readOnly
                      />
                    ) : (
                      choice === props.playerAnswer[index] && (
                        <input
                          className="wrong"
                          type="radio"
                          name={`${innerIndex} ${index}`}
                          value={choice}
                          id={`${innerIndex} ${index}`}
                          checked
                          readOnly
                        />
                      )
                    )}
                    <label
                      className="lbl answer-page"
                      htmlFor={`${innerIndex} ${index}`}>
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
        <p>{totalText}</p>
        <Link to={`/`}>
          <input className="btn" type="button" value="Play Again" />
        </Link>
      </div>
    </main>
  );
}
