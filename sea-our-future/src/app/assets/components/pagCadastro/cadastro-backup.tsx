// Cadastro.tsx

import React, { useState } from "react";
import "./cadastro.css";

const Cadastro: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="cadastroEmpresa">
      {currentPage === 1 && (
        <form className="formCadastro" action="index.html" method="post">
          {/* Page 1 content */}
          <fieldset>
            <legend>
              <span className="number">1</span> Informações
            </legend>

            <label htmlFor="razao_social">Razão Social:</label>
            <input
              className="cadastroInput"
              type="text"
              id="razao_social"
              name="user_razao_social"
            />

            <label htmlFor="cnpj">CNPJ:</label>
            <input
              className="cadastroInput"
              type="text"
              id="cnpj"
              name="user_cnpj"
            />

            <label htmlFor="proposta">Proposta:</label>
            <input
              className="cadastroInput"
              type="text"
              id="proposta"
              name="user_proposta"
            />

            <label htmlFor="website">Website:</label>
            <input
              className="cadastroInput"
              type="url"
              id="website"
              name="user_website"
            />

            <label htmlFor="email">Email:</label>
            <input
              className="cadastroInput"
              type="email"
              id="email"
              name="user_email"
            />

            <label htmlFor="senha">Senha:</label>
            <input
              className="cadastroInput"
              type="password"
              id="senha"
              name="user_senha"
            />
          </fieldset>

          <button
            className="btnCadastro"
            type="button"
            onClick={handleNextPage}
          >
            Próximo
          </button>
        </form>
      )}

      {currentPage === 2 && (
        <form className="formCadastro" action="index.html" method="post">
          {/* Page 2 content */}
          <fieldset>
            <legend>
              <span className="number">2</span> Endereço
            </legend>

            <label htmlFor="cep">CEP:</label>
            <input
              className="cadastroInput"
              type="text"
              id="cep"
              name="user_cep"
            />

            <label htmlFor="logradouro">Logradouro:</label>
            <input
              className="cadastroInput"
              type="text"
              id="logradouro"
              name="user_logradouro"
            />

            <label htmlFor="cidade">Cidade:</label>
            <input
              className="cadastroInput"
              type="text"
              id="cidade"
              name="user_cidade"
            />

            <label htmlFor="bairro">Bairro:</label>
            <input
              className="cadastroInput"
              type="text"
              id="bairro"
              name="user_bairro"
            />

            <label htmlFor="numero">Número:</label>
            <input
              className="cadastroInput"
              type="text"
              id="numero"
              name="user_numero"
            />

            <label htmlFor="estado">Estado:</label>
            <input
              className="cadastroInput"
              type="text"
              id="estado"
              name="user_estado"
            />
          </fieldset>

          <button
            className="btnCadastro"
            type="button"
            onClick={handlePreviousPage}
          >
            Anterior
          </button>
          <button
            className="btnCadastro"
            type="button"
            onClick={handleNextPage}
          >
            Próximo
          </button>
        </form>
      )}

      {currentPage === 3 && (
        <form className="formCadastro" action="index.html" method="post">
          {/* Page 3 content */}
          <fieldset>
            <legend>
              <span className="number">3</span> Contato
            </legend>

            <label htmlFor="contato_numero">Número:</label>
            <input
              className="cadastroInput"
              type="tel"
              id="contato_numero"
              name="user_contato_numero"
            />

            <label htmlFor="tipo_contato">Tipo de Contato:</label>
            <select
              className="cadastroInput"
              id="tipo_contato"
              name="user_tipo_contato"
            >
              <option value="telefone">Telefone</option>
              <option value="email">Email</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </fieldset>

          <button
            className="btnCadastro"
            type="button"
            onClick={handlePreviousPage}
          >
            Anterior
          </button>
          <button className="btnCadastro" type="submit">
            Cadastrar
          </button>
        </form>
      )}
    </div>
  );
};

export default Cadastro;
