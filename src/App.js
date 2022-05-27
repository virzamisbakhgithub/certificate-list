import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import RecentCertificate from './components/RecentCertificate';
import "./style/landingPage.css";

function App() {
  return (
    <div>
      {/* Intro Section */}
      <div className="myBG">
        <NavigationBar />
        <Intro />
      </div>
      {/* End of Intro */}

      {/* Recent Certificate */}
      <div className="recentCertBG">
        <RecentCertificate/>
      </div>
    </div>
  );
}

export default App;