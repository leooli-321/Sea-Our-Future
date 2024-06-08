// Cadastro.tsx

import React, { useState } from "react";
import "./cadastro.css";
import { empresa } from "@/types/empresa";
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "@/utils/requests";
import { endereco } from "@/types/endereco";
import { useRouter } from "next/navigation";

const Cadastro: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [objEmpresa, setObjEmpresa] = useState<empresa>();
  const [objEndereco, setObjEndereco] = useState<endereco | undefined>();
  const router = useRouter();

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const guardaObjEmpresa = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    setObjEmpresa({
      razaoSocial: formData.get("user_razao_social") as string,
      cnpj: formData.get("user_cnpj") as string,
      proposta: formData.get("user_proposta") as string,
      website: formData.get("user_website") as string,
      email: formData.get("user_email") as string,
      senha: formData.get("user_senha") as string,
      dataRegistro: '00/00/0000' as string
    });

    handleNextPage();
  };

  const guardaObjEndereco = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    setObjEndereco({
      cep: formData.get("user_cep") as string,
      logradouro: formData.get("user_logradouro") as string,
      localidade: formData.get("user_cidade") as string,
      bairro: formData.get("user_bairro") as string,
      numero: formData.get("user_numero") as any,
      uf: formData.get("user_estado") as string,
      idEmpresa: null as any
    });
    handleNextPage();
  };


  const enviaForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    try {
      // --------> CADASTRA EMPRESA
      const config: AxiosRequestConfig = {
        baseURL: BASE_URL,
        method: "POST",
        url: "/empresa",
        data: objEmpresa,
      };
      const response = await axios(config);
      console.log(response.data);
  
      // --------> BUSCA ID EMPRESA E ATRIBUI AO ENDERECO
      const getEmpresas: AxiosRequestConfig = {
        baseURL: BASE_URL,
        method: "GET",
        url: "/empresa",
      };
      const empresaResponse = await axios(getEmpresas);
      const empresa = empresaResponse.data.find((item: any) => item.email === objEmpresa?.email);
  
      if (empresa) {  
        // --------> CADASTRA ENDEREÇO
        const createEndereco: AxiosRequestConfig = {
          baseURL: BASE_URL,
          method: "POST", 
          url: "/endereco",
          data: { ...objEndereco, idEmpresa: empresa.id },
        };
        const enderecoResponse = await axios(createEndereco);
        console.log(enderecoResponse.data);

        // --------> CADASTRA CONTATO
        const createContato: AxiosRequestConfig = {
          baseURL: BASE_URL,
          method: "POST", 
          url: "/contato",
          data: { 
            numero: formData.get("user_contato_numero"),
            tipo: formData.get("user_tipo_contato"),
            idEmpresa: empresa.id
          },
        };
        const contatoResponse = await axios(createContato);
        console.log(contatoResponse.data);

        // --------> CADASTRA PERFIL
        const createPerfil: AxiosRequestConfig = {
          baseURL: BASE_URL,
          method: "POST", 
          url: "/perfil",
          data: { 
            logoEmpresa: "https://cdn-icons-png.flaticon.com/512/6789/6789241.png",
            atividade: objEmpresa?.proposta,
            descricao: objEmpresa?.razaoSocial,
            idEmpresa: empresa.id
          },
        };
        const perfilResponse = await axios(createPerfil);
        console.log(perfilResponse.data);

        router.push(`/Perfil?idEmpresa=${empresa.id}`);
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
    }

  }

  const debug = () => {
    // console.log(objEndereco);
  }

  return (
    <div className="cadastroEmpresa" onClick={debug}>
      {currentPage === 1 && (
        <form className="formCadastro" onSubmit={guardaObjEmpresa}>
          {/* Page 1 content */}
          <fieldset>
            <legend>
              <span className="number">1</span> Informações
            </legend>

            <label htmlFor="razao_social">Razão Social:</label>
            <input
              className="cadastroInput"
              type="text"
              id="razaoSocial"
              name="user_razao_social"
              defaultValue={objEmpresa?.razaoSocial}
            />

            <label htmlFor="cnpj">CNPJ:</label>
            <input
              className="cadastroInput"
              type="text"
              id="cnpj"
              name="user_cnpj"
              defaultValue={objEmpresa?.cnpj}
            />

            <label htmlFor="proposta">Proposta:</label>
            <input
              className="cadastroInput"
              type="text"
              id="proposta"
              name="user_proposta"
              defaultValue={objEmpresa?.proposta}
            />

            <label htmlFor="website">Website:</label>
            <input
              className="cadastroInput"
              type="url"
              id="website"
              name="user_website"
              defaultValue={objEmpresa?.website}
            />

            <label htmlFor="email">Email:</label>
            <input
              className="cadastroInput"
              type="email"
              id="email"
              name="user_email"
              defaultValue={objEmpresa?.email}
            />

            <label htmlFor="senha">Senha:</label>
            <input
              className="cadastroInput"
              type="password"
              id="senha"
              name="user_senha"
              defaultValue={objEmpresa?.senha}
            />
          </fieldset>

          <button
            className="btnCadastro"
            type="submit"
          >
            Próximo
          </button>
        </form>
      )}

      {currentPage === 2 && (
        <form className="formCadastro" onSubmit={guardaObjEndereco}>
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
              defaultValue={objEndereco?.cep}
            />

            <label htmlFor="logradouro">Logradouro:</label>
            <input
              className="cadastroInput"
              type="text"
              id="logradouro"
              name="user_logradouro"
              defaultValue={objEndereco?.logradouro}
            />

            <label htmlFor="cidade">Cidade:</label>
            <input
              className="cadastroInput"
              type="text"
              id="cidade"
              name="user_cidade"
              defaultValue={objEndereco?.localidade}
            />

            <label htmlFor="bairro">Bairro:</label>
            <input
              className="cadastroInput"
              type="text"
              id="bairro"
              name="user_bairro"
              defaultValue={objEndereco?.bairro}
            />

            <label htmlFor="numero">Número:</label>
            <input
              className="cadastroInput"
              type="text"
              id="numero"
              name="user_numero"
              defaultValue={objEndereco?.numero}
            />

            <label htmlFor="estado">Estado:</label>
            <input
              className="cadastroInput"
              type="text"
              id="estado"
              name="user_estado"
              defaultValue={objEndereco?.uf}
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
            type="submit"
          >
            Próximo
          </button>
        </form>
      )}

      {currentPage === 3 && (
        <form className="formCadastro" onSubmit={enviaForm}>
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
              <option value="celular">Celular</option>
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
