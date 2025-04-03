import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/galeria.css";

const imagens = [
  "img/beijo1.jpg", "img/beijo2.jpg", "img/familia.jpg", "img/foto1.jpg", "img/foto2.jpg",
  "img/foto3.jpg", "img/foto4.jpg", "img/foto5.jpg", "img/gramado.jpg", "img/gramado2.jpg",
  "img/linguinha1.jpg", "img/linguinha2.jpg", "img/mimindo.jpg", "img/minecraft.jpg", "img/mordida.jpg",
  "img/narigo.jpg", "img/pescoço.jpg", "img/zoin.jpg"
];

function Galeria() {
  const [index, setIndex] = useState(0);
  const [tempoPassado, setTempoPassado] = useState("");

  useEffect(() => {
    const nextSlide = () => setIndex((prevIndex) => (prevIndex + 1) % imagens.length);
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const calcularTempo = () => {
      const inicio = new Date("2023-12-12T00:00:00");
      const agora = new Date();
      const diff = agora - inicio;

      const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
      const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutos = Math.floor((diff / (1000 * 60)) % 60);
      const segundos = Math.floor((diff / 1000) % 60);

      setTempoPassado(`${dias}d ${horas}h ${minutos}m ${segundos}s`);
    };

    calcularTempo();
    const timer = setInterval(calcularTempo, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="galeria-container">
      <div className="temporizador">Juntos Desde: {tempoPassado}</div>
      <div className="carousel">
        <img src={imagens[index]} alt={`Imagem ${index + 1}`} className="active" />
      </div>
      <div className="buttons">
        <button onClick={() => setIndex((index - 1 + imagens.length) % imagens.length)}>Anterior</button>
        <button onClick={() => setIndex((index + 1) % imagens.length)}>Próxima</button>
      </div>
      <Link to="/mensagem">
        <button>Ir para a próxima página ❤️</button>
      </Link>
    </div>
  );
}

export default Galeria;
