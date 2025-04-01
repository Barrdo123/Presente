import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Galeria from "./components/Galeria.jsx";
import MensagemFinal from "./components/MensagemFinal.jsx";
import AudioPlayer from "./components/audioPlayer.jsx"; // Importando o áudio
import "./styles/global.css";

function App() {
  return (
    <Router>
      <AudioPlayer /> {/* Música de fundo tocando sempre */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/mensagem" element={<MensagemFinal />} />
      </Routes>
    </Router>
  );
}

export default App;
