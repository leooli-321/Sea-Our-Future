// components/Header.tsx

import React from "react";
import "./button.css";
import "./style.css";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link href="./">
        <div className="brand">Sea Our Future</div>
      </Link>
      <ul className="navLinks">
        <li>Dashboard</li>
        <li>Profile</li>

        <Link href="./Cadastro">
          <li>Cadastre sua Empresa</li>
        </Link>

        <li>Sobre Nós</li>

        <Link href="./Login">
          <button className="btn">Login</button>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
