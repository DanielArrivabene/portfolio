import './App.scss';

import Navbar from './components/header/Navbar';
import About from './components/main/About';
import Apresentation from './components/main/Apresentation';
import Technologies from './components/main/Technologies';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Apresentation />
        <About />
        <Technologies />
      </main>
    </>
  );
}

export default App;
