// about.tsx

import React from "react";
import "./aboutus.css";

const Aboutus: React.FC = () => {
  return (
    <div className="cards">
      <div className="card1" id="felipe">
        <img
          className="imgPerfil"
          src="https://avatars.githubusercontent.com/u/143852525?v=4"
          alt=""
        />
        <h1 className="perfil">Felipe Amador</h1>
        <p className="info">
          Como analista de dados, ele realizou a inserção de informações em
          bancos de dados, estudou e conduziu análises exploratórias sobre a
          poluição do ar e da água no Brasil. Além disso, estabeleceu conexões
          significativas entre esses dados e tabelas contendo informações
          mescladas. Seu objetivo principal era treinar um modelo de Machine
          Learning para identificar os pontos de maior poluição.
        </p>
        <div className="share">
          <a href="" className="linkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="card1" id="leonardo">
        <img
          className="imgPerfil"
          src="https://avatars.githubusercontent.com/u/111819459?v=4"
          alt=""
        />{" "}
        <h1 className="perfil">Leonardo de Oliveira</h1>
        <p className="info">
          Criador do front-end, ele foi responsável pelo desenvolvimento do
          website, pela implementação do sistema de cadastro e também recebeu a
          tarefa de proporcionar a melhor experiência possível aos usuários
        </p>
        <div className="share">
          <a href="" className="linkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="card1" id="sara">
        <img
          className="imgPerfil"
          src="https://avatars.githubusercontent.com/u/138391634?v=4"
          alt=""
        />
        <h1 className="perfil">Sara Sousa</h1>
        <p className="info">
          Como responsável pelo back-end: Conexão, estruturação e criação de
          tabelas com IDs automatizados, liderou a equipe e guiou a ideia
          central do projeto. Além disso, estabeleceu uma conexão perfeita entre
          o banco de dados e o site, que foi desenvolvido em camadas.
        </p>
        <div className="share">
          <a href="" className="linkedIn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
