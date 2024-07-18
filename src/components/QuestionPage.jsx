import BackdropDesign from './BackdropDesign';

export default function QuestionPage(props) {
  const quiz = props.quizObject;
  // console.log(quiz);

  const Queries = ({ question, choices }) => {
    return (
      <>
        {question.map((question, index) => (
          <div key={index}>
            <h4>{question}</h4>
            <ul>
              {choices[index].map((choice, innerIndex) => (
                <li key={innerIndex}>{choice}</li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  };

  return (
    <main className="question-page">
      <Queries question={quiz.question} choices={quiz.choices} />
      <a href={`/answers`}>
        <button>Check answers</button>
      </a>
    </main>
  );
}
