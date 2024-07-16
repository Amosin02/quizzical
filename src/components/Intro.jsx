import BackdropDesign from './BackdropDesign';

BackdropDesign;
export default function Intro() {
  return (
    <main className="intro-page">
      <BackdropDesign />
      <h1>Quizzical</h1>
      <a href={`/question`}>
        <button className="intro-btn">Start quiz</button>
      </a>
    </main>
  );
}
