import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import

import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes>
    </Router>
  );
}

export default App;
