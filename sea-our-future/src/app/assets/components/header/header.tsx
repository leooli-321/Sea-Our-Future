// components/Header.tsx

import React from 'react';
import './style.css'; // Importando os estilos CSS

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand">Sea Our Future</div>
      <ul className="navLinks">
        <li>Dashboard</li>
        <li>Cadastre sua Empresa</li>
        <li>Sobre Nós</li>
      </ul>
    </header>
  );
};

export default Header;
