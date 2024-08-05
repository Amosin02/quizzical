import BackdropDesign from './BackdropDesign';

export default function Intro() {
  return (
    <main className="intro-page">
      {/* <BackdropDesign /> */}
      <h1>Quizzical</h1>
      <p>Trivia questions about everything!</p>
      <a className="intro-btn-a-tag" href={`/question`}>
        <button className="intro-btn">Start quiz</button>
      </a>
    </main>
  );
}
