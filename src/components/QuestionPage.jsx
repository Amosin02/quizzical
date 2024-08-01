import BackdropDesign from './BackdropDesign';
import { Link } from 'react-router-dom';

export default function QuestionPage(props) {
  const quiz = props.quizObject;

  const Queries = ({ question, choices }) => {
    return (
      <>
        <form className="choices" id="forms" onSubmit={props.handleSubmit}>
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
          <input type="submit" value="Check answers" />
        </form>
      </>
    );
  };

  return (
    <main className="question-page">
      <Queries question={quiz.question} choices={quiz.choices} />
    </main>
  );
}
