// Perfil.tsx
import React from "react";
import "./headerPerfil.css";

const HeaderPerfil: React.FC = () => {
  return (
    <div className="profile">
      <div className="profile-avatar">
        <img
          src="https://i.ibb.co/z4MC8t6/Ag-ncia-de-emprego-logo-1.png"
          alt="Profile Avatar"
          className="profile-img"
        />
        <div className="profile-name">MarineTech</div>
      </div>
      <img
        src="https://images.unsplash.com/photo-1439405326854-014607f694d7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Profile Cover"
        className="profile-cover"
      />
      {/* <div className="profile-menu">
        <a className="profile-menu-link active">Início</a>
        <a className="profile-menu-link">Vendas</a>
        <a className="profile-menu-link">Leads</a>
        <a className="profile-menu-link">Contas</a>
        <a className="profile-menu-link">Contatos</a>
        <a className="profile-menu-link">Calendário</a>
        <a className="profile-menu-link">Painéis</a>
        <a className="profile-menu-link">Relatórios</a>
      </div> */}
    </div>
  );
};
export default HeaderPerfil;
