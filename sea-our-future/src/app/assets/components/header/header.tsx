// components/Header.tsx

import React from "react";
import "./button.css";
import "./style.css";
import "./hamburguer.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link href="./">
        <div className="brand">Sea Our Future</div>
      </Link>
      <ul className="navLinks">
        <li>
          <Link href="./Perfil" className="link">Perfil</Link>
        </li>
        <li>
          <Link href="./Dashboard" className="link">Dashboard</Link>
        </li>
        <li>
          <Link href="./Cadastro" className="link">Cadastre sua Empresa</Link>
        </li>
        <li>
          <Link href="./SobreNos" className="link">Sobre Nós</Link>
        </li>
        <li>
          <Link href="./Login">
            <button className="btn">Login</button>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
