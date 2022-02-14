import React from 'react';
import NavBar from './components/NavBar';
import Accueil from './pages/Accueil';
import Portfolio from './pages/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Skills from './pages/Skills';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
    </Router>
  );
}

export default App;
