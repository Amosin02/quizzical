import BackdropDesign from './BackdropDesign';

export default function QuestionPage(props) {
  return (
    <>
      <BackdropDesign />
      <h4>{props.questionArr[0]}</h4>
      <p>{props.wrong_choices}</p>
      <p>{props.right_choice}</p>
      <a href={`/answers`}>
        <button>Check answers</button>
      </a>
    </>
  );
}
