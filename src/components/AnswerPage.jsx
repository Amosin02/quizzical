import BackdropDesign from './BackdropDesign';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function AnswerPage(props) {
  const quiz = props.quizObject;

  useEffect(() => {
    function checkAnswers() {
      for (let i = 0; i < props.playerAnswer.length; i++) {
        if (props.playerAnswer[i] === quiz.correct_answer[i]) {
          console.log(`correct question ${i + 1}`);
        }
      }
    }

    checkAnswers();
  }, []);

  const Queries = ({ question, choices }) => {
    return (
      <>
        <form className="choices" id="forms">
          {question.map((question, index) => (
            <div key={index}>
              <h4>{question}</h4>
              {choices[index].map((choice, innerIndex) => (
                <div key={innerIndex}>
                  {props.playerAnswer[index] === choice ? (
                    <input
                      type="radio"
                      name={index}
                      value={choice}
                      id={index}
                      checked="checked"
                      readOnly
                    />
                  ) : (
                    <input
                      type="radio"
                      name={index}
                      value={choice}
                      id={index}
                    />
                  )}
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
      <Queries question={quiz.question} choices={quiz.choices} />
      <Link to={`/`}>
        <input type="button" value="Play Again" />
      </Link>
    </main>
  );
}
