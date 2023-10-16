import './App.scss';

import Navbar from './components/header/Navbar';
import About from './components/main/About';
import Apresentation from './components/main/Apresentation';
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
      </main>
    </>
  );
}

export default App;
