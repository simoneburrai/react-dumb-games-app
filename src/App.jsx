import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/NavBar';
import HomePage from './pages/HomePage';
import DiceGame from './pages/DiceGame';
import PaperScissorRock from './pages/PaperScissorRock';
import TrisGame from './pages/TrisGame';
import SecretNumberGame from './pages/SecretNumberGame';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dice-game" element={<DiceGame />} />
        <Route path="/Paper-Scissor-Rock" element={<PaperScissorRock />} />
        <Route path="/Tris-game" element={<TrisGame />} />
        <Route path="/Secret-Number" element={<SecretNumberGame />} />
      </Routes>
    </Router>
  )
}

export default App
