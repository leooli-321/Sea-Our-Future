"use client";
import Header from "../assets/components/header/header";
import HeaderPerfil from "../assets/components/pagPerfil/HeaderPerfil";
import Perfil from "../assets/components/pagPerfil/perfil";
import Footer from "../assets/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeaderPerfil />
      <Perfil />
      <Footer />
    </main>
  );
}
