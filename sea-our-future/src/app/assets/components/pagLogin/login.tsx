// login.tsx

import React from "react";
import "./style.css"; // Importando o arquivo style.css

const Login: React.FC = () => {
  return (
    <div className="login">
      <div className="form-container sign-in-container">
        <form action="#">
          <h1 className="tituloLogin">Login</h1>
          <span className="subtituloLogin">Insira suas informações</span>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button className="btn login" id="singIn">
            Entrar
          </button>
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-right">
            <h1>Ainda não registrou sua empresa?</h1>
            <span>
              Aperte em "Cadastre-se" para embarcarmos juntos na primeira
              plataforma de conexões entre empresas de Plástico.
            </span>
            <button className="btn cadastro" id="signUp">
              Cadastre-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
