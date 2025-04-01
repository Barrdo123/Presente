import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <p>Nesse presente quis me esforçar um pouquinho mais<br /> 
      e usar algo que eu goste <br />
      pra fazer algo que você goste!</p>
      <Link to="/galeria">
        <button>Clique</button>
      </Link>
    </div>
  );
}

export default Home;
