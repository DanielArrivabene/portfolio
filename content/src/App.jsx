import './styles/mediaQuery.scss';

import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import About from './components/main/About';
import Hero from './components/main/Hero';
import Contact from './components/main/Contact';
import Projects from './components/main/Projects';
import Technologies from './components/main/Technologies';
import Atributes from './components/main/Atributes';
import HeroBar from './components/main/HeroBar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroBar />
        <Atributes />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
