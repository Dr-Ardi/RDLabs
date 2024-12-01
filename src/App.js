import './App.css';
import { useState, useEffect } from "react";

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Academics from './pages/Academics/Academics';
import Projects from './pages/Projects/Projects';

function App() {

  const [lang, setLang] = useState([]);

  const url = `https://dr-ardi.github.io/LabsContent/lang/en.json`;

  useEffect(() => {
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
          setLang(data); 
      })
      .catch((error) => {
          console.error('Error fetching JSON:', error);
      });
  }, [])

  return (
      <div className="App">
        <Navbar />
        {/* <Home home={lang.home} />  */}
        {/* <Academics aca={lang.academics} /> */}
        <Projects pro={lang.projects}/>
      </div>
  );
}

export default App;
