import lrtbg from "../lrtsumselbackground.jpeg";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="header">
        <div className="logo">LRTSumsel</div>
        <div className="menu">Profil</div>
        <div className="menu">Kepegawaian</div>
      </div>
      <img src={lrtbg} className="App-logo" alt="logo" />
      <div className="text-welcome">Welcome To LRT Sumsel</div>
    </div>
  );
}

export default LandingPage;
