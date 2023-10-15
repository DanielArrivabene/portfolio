import './App.scss';

import Navbar from './components/header/Navbar';
import Apresentation from './components/main/Apresentation';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Apresentation />
      </main>
    </>
  );
}

export default App;
