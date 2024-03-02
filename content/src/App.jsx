import './styles/mediaQuery.scss';

import Navbar from './components/header/Navbar';
import Hero from './components/main/Hero';
//import HeroBar from './components/main/HeroBar';
import Clients from './components/main/Clients';
import About from './components/main/About';
import Technologies from './components/main/Technologies';
import Projects from './components/main/Projects';
import Contact from './components/main/Contact';
import Footer from './components/footer/Footer';
import ScrollBar from './components/main/ScrollBar';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        {/*<HeroBar />*/}
        <About />
        <Technologies />
        <ScrollBar />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
