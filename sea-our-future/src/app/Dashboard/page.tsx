"use client";
import Header from "../assets/components/header/header";
import Dashboard from "../assets/components/pagDashboard/dashboard";
import Grafico from "../assets/components/pagDashboard/grafico";
import Footer from "../assets/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Dashboard/>
      <Grafico />
      <Footer />
    </main>
  );
}
