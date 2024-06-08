"use client";
import Header from "../assets/components/header/header";
import HeaderPerfil from "../assets/components/pagPerfil/HeaderPerfil";
import Perfil from "../assets/components/pagPerfil/perfil";
import Footer from "../assets/components/footer/footer";

export default function Home({ searchParams }: any) {
  const idEmpresa = searchParams.idEmpresa;

  return (
    <main>
      <Header />
      <Perfil idEmpresa={idEmpresa} />
      <Footer />
    </main>
  );
}
