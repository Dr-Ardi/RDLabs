import './App.css';
import { useState, useEffect } from "react";

import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home/Home';
import Academics from './pages/Academics/Academics';
import Projects from './pages/Projects/Projects';
import { Route, Routes } from 'react-router';

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
        <Routes>
          <Route exact path="/" element={<Home home={lang.home} />} /> 
          <Route exact path="/academics" element={<Academics aca={lang.academics} />} /> 
          <Route exact path="/projects" element={<Projects pro={lang.projects} />} /> 
        </Routes>
      </div>
  );
}

export default App;
