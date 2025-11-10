import './App.css';
import Header from './components/Header';
import MainArea from './components/MainArea';
import Firstview from './components/Firstview';
import BamosList from './components/BamosList';
import bamosList from './components/bamosList/bamosList';
import StateModal from './components/StateModal';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainArea>
        <Firstview />
        <h2 className="segment">Latest Blog Posts</h2>
        <BamosList src={bamosList} />
        <h2 className="segment">We Value Your Feedback</h2>
        <p>
          We’re gathering feedback from our customers at BAMOS DESIGN.
          <br />
          Please take a moment to share your thoughts — your input helps us make
          BAMOS DESIGN even <br />
          better. <br />
        </p>

        <StateModal />
      </MainArea>
      <Footer />
    </>
  );
}

export default App;
