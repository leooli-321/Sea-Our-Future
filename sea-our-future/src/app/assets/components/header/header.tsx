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
        <li>Dashboard</li>
        <li>
          <Link href="./Cadastro">Cadastre sua Empresa</Link>
        </li>
        <li>Sobre Nós</li>
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
