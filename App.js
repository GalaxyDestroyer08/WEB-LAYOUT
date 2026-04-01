import './style.css';
import Header from './Header';
import Hero from './Hero';
import Intro from './Intro';
import Features from './Features';
import Footer from './Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Hero />
      <Intro />
      <Features />
      <Footer />
    </div>
  );
}

export default App;