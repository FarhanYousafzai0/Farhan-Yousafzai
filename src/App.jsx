import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

import Insights from './Pages/Insights';
import Work from './Pages/Work';


const App = () => {
  return (
    <Router>
    
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
         <Route path="/work" element={<Work />} />
        <Route path="/insights" element={<Insights />} />
      </Routes>
    </Router>
  );
};

export default App;
