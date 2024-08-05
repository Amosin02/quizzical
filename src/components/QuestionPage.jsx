export default function QuestionPage(props) {
  const Queries = ({ question, choices }) => {
    return (
      <>
        <form id="forms" onSubmit={props.handleSubmit}>
          {question.map((question, index) => (
            <div className="quiz" key={index}>
              <h4>{question}</h4>
              <div className="choices">
                {choices[index].map((choice, innerIndex) => (
                  <div key={innerIndex}>
                    <input
                      className="checkmark"
                      type="radio"
                      name={index}
                      value={choice}
                      id={index}
                    />
                    <label className="lbl" htmlFor={innerIndex}>
                      {choice}
                    </label>
                  </div>
                ))}
              </div>
              <hr />
            </div>
          ))}
          <div className="btn-container">
            <input className="btn" type="submit" value="Check answers" />
          </div>
        </form>
      </>
    );
  };

  return (
    <main className="question-page">
      <Queries question={props.quizQuestion} choices={props.quizChoices} />
    </main>
  );
}
