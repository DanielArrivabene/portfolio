import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import About from './components/main/About';
import Apresentation from './components/main/Apresentation';
import Contact from './components/main/Contact';
import Projects from './components/main/Projects';
import Technologies from './components/main/Technologies';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Apresentation />
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
