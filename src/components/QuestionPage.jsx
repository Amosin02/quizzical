import BackdropDesign from './BackdropDesign';

export default function QuestionPage(props) {
  const quiz = props.quizObject;

  // function handleChange(event) {
  //   console.log(event.target.value);
  // }
  // console.log(quiz);

  const Queries = ({ question, choices }) => {
    return (
      <>
        <form className="choices" id="forms" onSubmit={props.handleSubmit}>
          {question.map((question, index) => (
            <div key={index}>
              <h4>{question}</h4>
              {choices[index].map((choice, innerIndex) => (
                // <ul className={`choice ${innerIndex}`} key={innerIndex}>
                <div key={innerIndex}>
                  <input type="radio" name={index} value={choice} id={index} />
                  <label htmlFor={innerIndex}>{choice}</label>
                </div>

                // </ul>
              ))}
            </div>
          ))}
          <a href={`/answers`}>
            {/* <button>Check answers</button> */}
            <input type="submit" value="Check answers" />
          </a>
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
