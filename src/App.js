import './App.scss';
import Application from './components/Application';
import Footer from './components/Footer';
import Header from './components/Header';
import Infrastructure from './components/Infrastructure';
import Intro from './components/Intro';

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Infrastructure />
      <Application />
      <Footer />
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>. 
        Coded by <a href="https://lkilp.github.io/portfolio/">Liis Kilp</a>.
      </div>
    </div>
  );
}

export default App;
