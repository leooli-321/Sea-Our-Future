import React, { useState } from "react";
import "./login.css"; // Importando o arquivo style.css
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BASE_URL } from "@/utils/requests";
import axios, { AxiosRequestConfig } from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();


  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    if (!email || !password) {
      setError("Preencha todos os campos corretamente");
    } else {
      // --------> BUSCA ID EMPRESA E REALIZAR O LOGIN
      const getEmpresas: AxiosRequestConfig = {
        baseURL: BASE_URL,
        method: "GET",
        url: "/empresa",
      };
      const empresaResponse = await axios(getEmpresas);
      const empresa = empresaResponse.data.find((item: any) => 
        item.email === email && item.senha === password
      );
  
      if (empresa) {  
        router.push(`/Perfil?idEmpresa=${empresa.id}`);
      } else {
        setError("O usuário não existe em nosso banco...");
      }

    }
  };

  return (
    <div className="login">
      <div className="form-container sign-in-container">
        <form className="formLogin" onSubmit={handleLogin}>
          <h1 className="tituloLogin">Login</h1>
          <span className="subtituloLogin">Insira suas informações</span>
          <input
            className="inputLogin"
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="inputLogin"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn login" id="singIn" type="submit">
            Entrar
          </button>
          {error && <p className="error">{error}</p>}
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
            <Link href="./Cadastro">
              <button className="btn cadastro" id="signUp">
                Cadastre-se
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
