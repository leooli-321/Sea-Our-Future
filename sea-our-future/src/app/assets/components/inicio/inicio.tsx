// inicio.tsx

import React from "react";
import "./style.css"; // Importando o arquivo style.css

const Inicio: React.FC = () => {
  return (
    <main className="inicio">
      <section className="header2">
        <video
          autoPlay
          playsInline
          muted
          loop
          poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg"
        >
          <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
          <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
        </video>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 285 80"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <mask id="mask" x="0" y="0" width="100%" height="100%">
              <rect x="0" y="0" width="100%" height="100%" fill="black" />
              <text
                x="50%"
                y="50%"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="black"
              >
                Sea Our Future
              </text>

              <text
                className="subtitulo"
                x="50%"
                y="60%"
                text-anchor="middle"
                dominant-baseline="middle"
                fill="black"
              >
                Os mares morrem, o plástico não.
              </text>
            </mask>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" mask="url(#mask)" />
        </svg>
      </section>
      <div className="rm">
        <h3 className="turma">1TDSPS</h3>
        <h4 className="alunos">
          Felipe Amador Matos - RM553528 // Leonardo de Oliveira - RM554024 //
          Sara Sousa - RM552656
        </h4>
      </div>
    </main>
  );
};

export default Inicio;
