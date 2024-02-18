import './styles/mediaQuery.scss';

import Navbar from './components/header/Navbar';
import HeroBar from './components/main/HeroBar';
import Clients from './components/main/Clients';
import About from './components/main/About';
import Hero from './components/main/Hero';
import Contact from './components/main/Contact';
import Projects from './components/main/Projects';
import Technologies from './components/main/Technologies';
import Atributes from './components/main/Atributes';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HeroBar />
        <Clients />
        <About />
        <Technologies />
        <Atributes />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
