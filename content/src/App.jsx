import './styles/mediaQuery.scss';

import Navbar from './components/header/Navbar';
import Hero from './components/main/Hero';
import Services from './components/main/Services';
//import HeroBar from './components/main/HeroBar';
import About from './components/main/About';
import Atributes from './components/main/Atributes';
import Phases from './components/main/Phases';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';
//import ScrollBar from './components/main/ScrollBar';
import Testemonials from './components/main/Testemonials';
import Responsiveness from './components/main/Responsiveness';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        {/*<HeroBar />*/}
        <About />
        <Atributes />
        <Phases />
        {/*<ScrollBar />*/}
        <Responsiveness />
        <Projects />
        <Testemonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
