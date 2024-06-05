// components/Dashboard.tsx
import React from "react";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="tituloDash">Veja a porcentagem das cidades com as águas mais poluídas do Brasil:</h1>
      <h2 className="subtituloDash">Nossa equipe obteve e analisou dados relacionados à poluição</h2>
    </div>
  );
};

export default Dashboard;
