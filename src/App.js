import './App.css';
import en from './en.json'

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Education from './pages/Education/Education';

function App() {

  return (
      <div className="App">
        <Navbar />
        <Home home={en.home} /> 
        {/* <Education edu={en.education} /> */}
      </div>
  );
}

export default App;
