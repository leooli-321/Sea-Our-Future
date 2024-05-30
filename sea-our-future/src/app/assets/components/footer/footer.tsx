// footer.tsx

import React from "react";
import "./style.css"; // Importando os estilos CSS

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="#203f7c" />
          <use
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(18, 100, 183, 1)"
          />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="#055761" />
        </g>
      </svg>

      {/* 
      <div className="content">
  <h3>1TDSPS</h3>
  <h4>Felipe Amador Matos - RM553528</h4>
  <h4>Leonardo de Oliveira - RM554024</h4>
  <h4>Sara Sousa - RM552656</h4>
</div> */}
    </div>
  );
};

export default Footer;
