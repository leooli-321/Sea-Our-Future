"use client";
import Header from "../assets/components/header/header";
import AboutCo from "../assets/components/aboutco/aboutco";
import Aboutus from "../assets/components/aboutus/aboutus";
import Footer from "../assets/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <AboutCo/>
      <Aboutus />
      <Footer />
    </main>
  );
}
