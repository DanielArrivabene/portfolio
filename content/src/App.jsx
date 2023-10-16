import './App.scss';

import Navbar from './components/header/Navbar';
import About from './components/main/About';
import Apresentation from './components/main/Apresentation';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Apresentation />
        <About />
      </main>
    </>
  );
}

export default App;
