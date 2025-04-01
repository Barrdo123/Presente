import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/galeria.css";

const imagens = [
  "img/beijo1.jpg",
  "img/beijo2.jpg",
  "img/familia.jpg",
  "img/foto1.jpg",
  "img/foto2.jpg",
  "img/foto3.jpg",
  "img/foto4.jpg",
  "img/foto5.jpg",
  "img/gramado.jpg",
  "img/gramado2.jpg",
  "img/linguinha1.jpg",
  "img/linguinha2.jpg",
  "img/mimindo.jpg",
  "img/minecraft.jpg",
  "img/mordida.jpg",
  "img/narigo.jpg",
  "img/pescoço.jpg",
  "img/zoin.jpg"
];

function Galeria() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((index + 1) % imagens.length);
  const prevSlide = () => setIndex((index - 1 + imagens.length) % imagens.length);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="galeria-container">
      <div className="carousel">
        <img src={imagens[index]} alt={`Imagem ${index + 1}`} className="active" />
      </div>
      <div className="buttons">
        <button onClick={prevSlide}>Anterior</button>
        <button onClick={nextSlide}>Próxima</button>
      </div>
      <Link to="/mensagem">
        <button>Ir para a próxima página ❤️</button>
      </Link>
    </div>
  );
}

export default Galeria;
